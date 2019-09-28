interface SAF {
    ExecuteRequest(query: {
        "RegionId"?: string;
        "Service": string;
        "ServiceParameters"?: string;
    }): Promise<{}>;
}
export default SAF;
