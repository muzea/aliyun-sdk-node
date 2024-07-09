export interface GetTurnServerListResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     */
    Code: string;
    /**
     * 响应信息。
     */
    Message: string;
    /**
     * 请求ID。
     */
    RequestId: string;
    /**
     * 数据，前置接入点服务器信息列表。
     * @example `[
        {
            "region":"hangzhou",
            "name":"杭州",
            "domain":"turn-hz-ecs.ccc.aliyuncs.com",
            "cidr":"172.31.XX.XX/28"
        },
        {
            "region":"qingdao",
            "name":"青岛",
            "domain":"turn-qd-ecs.ccc.aliyuncs.com",
            "cidr":"172.31.XX.XX/28"
        },
        {
            "region":"shanghai",
            "name":"上海",
            "domain":"turn-sh-ecs.ccc.aliyuncs.com",
            "cidr":"172.31.XX.XX/28"
        },
        {
            "region":"chengdu",
            "name":"成都",
            "domain":"turn-cd-ecs.ccc.aliyuncs.com",
            "cidr":"172.31.XX.XX/28"
        },
        {
            "region":"beijing",
            "name":"北京",
            "domain":"turn-bj-ecs.ccc.aliyuncs.com",
            "cidr":"172.31.XX.XX/28"
        },
        {
            "region":"huanan",
            "name":"深圳",
            "domain":"turn-sz-ecs.ccc.aliyuncs.com",
            "cidr":"172.31.XX.XX/28"
        },
        {
            "region":"zhangbei",
            "name":"张北",
            "domain":"turn-zb-ecs.ccc.aliyuncs.com",
            "cidr":"172.31.XX.XX/28"
        }
    ]`
     */
    Data: string;
    Params: string[];
}
