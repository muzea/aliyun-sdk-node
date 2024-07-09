export interface DeleteErAttachmentResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `A88DFED5-24B7-5A3E-87DE-380BF06F3C90`
     */
    RequestId: string;
    /**
     * 响应内容（当资源存在依赖资源时，会返回存在的依赖资源）。
     * @example `{
        "ER_RMAP": [
            {
                "erId": "er-opy1wrfv",
                "destinationCidrBlock": "0.0.0.0/0",
                "regionId": "cn-wulanchabu",
                "routeMapNum": 3000,
                "erRouteMapId": "er-rmap-v5lfhmvm",
                "action": "permit",
                "status": "Available"
            },
            {
                "erId": "er-opy1wrfv",
                "destinationCidrBlock": "0.0.0.0/0",
                "regionId": "cn-wulanchabu",
                "routeMapNum": 3000,
                "erRouteMapId": "er-rmap-of3r0ndh",
                "action": "permit",
                "status": "Available"
            }
        ]
    }`
     */
    Content: any;
}
