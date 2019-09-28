interface STS {
    AssumeRole(query: {
        "RegionId"?: string;
        "RoleArn": string;
        "RoleSessionName": string;
        "DurationSeconds"?: number;
        "Policy"?: string;
    }): Promise<{}>;
    AssumeRoleWithSAML(query: {
        "RegionId"?: string;
        "SAMLProviderArn"?: string;
        "RoleArn"?: string;
        "SAMLAssertion"?: string;
        "Policy"?: string;
        "DurationSeconds"?: number;
    }): Promise<{}>;
    GetCallerIdentity(query: {
        "RegionId"?: string;
    }): Promise<{}>;
}
export default STS;
