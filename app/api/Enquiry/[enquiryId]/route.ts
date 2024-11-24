// import { NextRequest, NextResponse } from 'next/server';
// import connectMongo from '@/lib/mongodb';
// import Enquiry from '@/models/Enquiry';

// // Remove the RouteParams interface, as it's unnecessary in this case.

// export async function PATCH(
//     request: NextRequest,
//     { params }: { params: Promise<{ enquiryId: string } } // Directly destructure params from the context
// ) {
//     const { enquiryId } = context.params; // Access the enquiryId from the context params

//     try {
//         await connectMongo();

//         const enquiry = await Enquiry.findById(enquiryId);

//         if (!enquiry) {
//             return NextResponse.json(
//                 { error: 'Enquiry not found' },
//                 { status: 404 }
//             );
//         }

//         enquiry.status = 'rejected';
//         await enquiry.save();

//         return NextResponse.json(
//             { message: 'Enquiry status updated to rejected', enquiry },
//             { status: 200 }
//         );
//     } catch (error) {
//         console.error('Error updating enquiry status:', error);
//         return NextResponse.json(
//             { error: 'Internal server error' },
//             { status: 500 }
//         );
//     }
// }





import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ enquiryId: string }> } // Correct destructuring for params
) {
    const { enquiryId } = await params; // Access the enquiryId directly from params

    try {
        await connectMongo(); // Connect to the MongoDB database

        const enquiry = await Enquiry.findById(enquiryId); // Find the enquiry by ID

        if (!enquiry) {
            // If the enquiry is not found, return a 404 response
            return NextResponse.json(
                { error: 'Enquiry not found' },
                { status: 404 }
            );
        }

        // Update the status to 'rejected'
        enquiry.status = 'rejected';
        await enquiry.save(); // Save the updated enquiry document

        // Return a success response with the updated enquiry
        return NextResponse.json(
            { message: 'Enquiry status updated to rejected', enquiry },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating enquiry status:', error);
        // Return an error response if something goes wrong
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
