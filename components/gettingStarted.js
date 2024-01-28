import WizardPrompt from "./wizard/WizardPrompt";


export function GettingStarted(){

    return <div>
        <div className="block xl:flex w-full mt-10">
            <div className="flex-grow pl-4 pr-8 text-2xl mb-4">
                <h4 className="text-3xl mb-4">StationOps Docs</h4>
                <p>
                    StationOps is a unified platform to rapidly configure, deploy and manage apps within your own AWS account.
                </p>


                <p>
                    Dive into the documentation or get started with a quickstart.
                </p>
            </div>
            <div  className="max-w-lg p-4">
                <WizardPrompt />
            </div>

        </div>
    </div>

}