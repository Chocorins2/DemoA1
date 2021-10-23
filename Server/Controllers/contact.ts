import express, { Request, Response, NextFunction } from 'express';
import { NativeError } from 'mongoose';

// Contact Model Reference - db.Contact
import Contact from '../Models/Contact';

// import Util Functions
import { UserDisplayName } from '../Util';


// Display Functions

//(R)ead in CRUD
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.Contact.find()
    Contact.find((err, ContactCollection) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        
        res.render('index', { title: 'Contact List', page: 'Contact-list', Contact: ContactCollection, displayName: UserDisplayName(req)   });
    }).sort({name:1});
}

// Display (E)dit page
export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // pass the id to the db

    // db.Contact.find({"_id": id})

    Contact.findById(id, {}, {}, (err, ContactItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit view
        res.render('index', { title: 'Edit', page: 'update', Contact: ContactItemToEdit, displayName: UserDisplayName(req)   });
    });
}

// Display (C)reate page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'update', Contact: '', displayName: UserDisplayName(req)  });
}

// Process Functions

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Contact Item
    let updatedContactItem = new Contact
    ({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });
  
    // find the Contact item via db.Contact.update({"_id":id}) and then update
    Contact.updateOne({_id: id}, updatedContactItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/Contact-list');
    });
}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new Contact
  let newContact = new Contact
  ({
    "name": req.body.name,
    "brand": req.body.brand,
    "category": req.body.category,
    "colour": req.body.colour,
    "size": req.body.size,
    "price": req.body.price
  });

  // db.Contact.insert({Contact data is here...})
  Contact.create(newContact, (err:NativeError) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/Contact-list');
  });
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.Contact.remove({"_id: id"})
  Contact.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/Contact-list');
  });
}