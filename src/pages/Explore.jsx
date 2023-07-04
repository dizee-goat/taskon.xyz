import Layout from "./Layout";
import ExploreItem from "../components/ExploreItem";

export default function Explore () {
    return (
        <Layout menuIdx={1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
                <ExploreItem />
                <ExploreItem />
                <ExploreItem />
                <ExploreItem />
            </div>
        </Layout>
    );
}