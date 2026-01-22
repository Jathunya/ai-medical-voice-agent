"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { DialogClose } from "@radix-ui/react-dialog"
import { ArrowRight } from "lucide-react"

import React, { useState } from 'react'

const AddNewSessionDialog = () => {
    const [note,setNote] = useState <String> ();
  return (
    <Dialog>
  <DialogTrigger>
     <Button className='mt-3'>+ Start a Consultation</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription asChild>
        <div>
            <h2>Add Symptom or Basic Other Details</h2>
            <Textarea placeholder="Add Detail here..."
             className="h-[200px] mt-1"
            onChange={(e) => setNote(e.target.value)}
            />
        </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
            <Button variant={'outline'}>Cancel</Button>
        </DialogClose>
         <Button disabled={!note}>Next <ArrowRight/></Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
  )
}

export default AddNewSessionDialog