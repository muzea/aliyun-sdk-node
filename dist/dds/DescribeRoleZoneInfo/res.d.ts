interface DescribeRoleZoneInfoResponse {
    "ZoneInfos": {
        "ZoneInfo": {
            "RoleType": string;
            "NodeType": string;
            "InsName": string;
            "ZoneId": string;
            "RoleId": string;
        }[];
    };
    "RequestId": string;
}
export { DescribeRoleZoneInfoResponse };