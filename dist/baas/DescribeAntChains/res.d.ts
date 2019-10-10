interface DescribeAntChainsResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "Pagination": {
                "TotalCount": number;
                "PageSize": number;
                "PageNumber": number;
            };
            "IsExist": boolean;
            "AntChains": {
                "IsAdmin": boolean;
                "AntChainId": string;
                "AntChainName": string;
                "TlsAlgo": string;
                "NodeNum": number;
                "CipherSuit": string;
                "CreateTime": number;
                "ResourceSize": string;
                "Network": string;
                "ChainType": string;
                "MerkleTreeSuit": string;
                "RegionId": string;
                "MemberStatus": string;
                "ExpireTime": number;
            }[];
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainsResponse };