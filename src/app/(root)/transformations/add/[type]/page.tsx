import Image from "next/image";
import Header from "@/components/shared/header";
import {transformationTypes} from "@/constants";
import TransformationForm from "@/components/shared/transformation-form";
import {auth} from "@clerk/nextjs";
import {getUserById} from "@/lib/actions/user.actions";
import {redirect} from "next/navigation";

export default async function AddTransformationTypePage({params: {type}} : SearchParamProps) {
  const {userId} =  auth();
  if (!userId) {
    redirect('/sign-in');
  }

  const user = await getUserById(userId);
  const transformation = transformationTypes[type];
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle}/>
      <section className="mt-10">
        <TransformationForm action="Add" userId={user._id}
                            type={transformation.type as TransformationTypeKey}
                            creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
}
