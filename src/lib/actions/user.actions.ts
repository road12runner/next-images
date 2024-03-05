'use server';

import {connectToDatabase} from "@/lib/database/mongoose";
import User from "@/lib/database/models/user.mode";
import {handleError} from "@/lib/utils";


export async function createUser(user: CreateUserParams) {
  try {
    await  connectToDatabase();
    const newUser = await  User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (e) {
    handleError(e);
  }
}

export async function getUserById(userId: string) {
  try {
    await connectToDatabase();
    const user = await  User.findOne({clerkId: userId});

    if (!user) {
      throw new Error("User not found");
    }

    return JSON.parse(JSON.stringify(user));
  } catch (e) {
    handleError(e);
  }
}


export async function deleteUser(clerkId: string) {
  try {
    await  connectToDatabase();
    const userToDelete = await  User.findOne({clerkId});
    if (!userToDelete) {
      throw new Error ("User not found");
    }
    // delete
    const deleteUser = await User.findByIdAndDelete(userToDelete._id);

    return deleteUser ? JSON.parse(JSON.stringify(deleteUser)) : null;

  } catch (e) {
    handleError(e);
  }
}


// use credits

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await  connectToDatabase();
    const updatedUser = await  User.findOneAndUpdate(
      {clerkId},
      user,
      {new: true}
    );

    if (!updatedUser) {
      throw  new Error("User update failed");
    }
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (e) {
    handleError(e);
  }
}

export async function updateCredits(userId: string, creditFee: string) {
  try {
    await connectToDatabase();
    const updateUserCredits  =  await User.findOneAndUpdate(
      {_id: userId},
      {$inc: {creditBalance: creditFee}},
      {new: true}

    );

    if (!updateUserCredits) {
      throw new Error("User credits update failed");
    }
  } catch (e) {
    handleError(e);
  }
}
