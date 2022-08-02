import dynamic from "next/dynamic";
import { Suspense } from "react";

const MFE1Banner = dynamic(
	() => import("mfe1/Banner"),
	{
		suspense: true,
	}
);

export const Banner = () => {
	return (
		<Suspense fallback={"Loading..."}>
			<MFE1Banner />
		</Suspense>
	);
};