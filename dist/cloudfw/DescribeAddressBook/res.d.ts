interface DescribeAddressBookResponse {
    "TotalCount": number;
    "PageSiNo": number;
    "PageSize": number;
    "RequestId": string;
    "Acls": {
        "Description": string;
        "GroupType": string;
        "AddressList": string[];
        "GroupName": string;
        "AutoAddTagEcs": number;
        "TagValue": string;
        "TagRelation": string;
        "TagList": any[];
        "ReferenceCount": number;
        "TagKey": string;
        "AddressListCount": number;
        "GroupUuid": string;
        "Global": number;
    }[];
}
export { DescribeAddressBookResponse };