/** Streaming is data transfer, breaking down each component into small chunks,
 * and progressively stream them from the server to client as soon as they become ready.
 * >> Prevent slow data requests from blocking the whole page
 */

import DashboardSkeleton from "../../ui/skeletons";

/** "loading.tsx" is a special Next.js file built on top of Suspense > 
 * allows to create fallback UI to show as a replacement while page content laods. */

/** Having "loading.tsx" and "page.tsx" in (overview) folder
 * makes the "loading.tsx" file only applies to the dashboard overview page
 * New folder using () won't be included in the URL path.
 */

export default function Loading() {
    return <DashboardSkeleton/>
}