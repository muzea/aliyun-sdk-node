interface AddBulkPhoneNumbersRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "Usage": string;
    "PhoneNumber": string[];
    "ContactFlowId"?: string;
    "SkillGroupId"?: string[];
}
export { AddBulkPhoneNumbersRequest };