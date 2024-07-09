export interface DescribePartnerConfigResponse {
    /**
     * 合作伙伴名称
     * @example `北京科技有限公司`
     */
    PartnerName: string;
    /**
     * 请求id
     * @example `8179A0B3-A5D3-52F4-8845-F0ABC3CC6783`
     */
    RequestId: string;
    /**
     * 伙伴关系编码
     * @example `jinsan`
     */
    PartnerCode: string;
    /**
     * 联系方式
     * @example `{\"channels\":[{\"level\":3,\"type\":\"SMS\",\"value\":\"13817600000\"}],\"desc\":\"\",\"name\":\"张三\",\"project\":\"acs_custom_1140019485546150\",\"userId\":\"1140019485546150\"}`
     */
    Contact: string;
}
