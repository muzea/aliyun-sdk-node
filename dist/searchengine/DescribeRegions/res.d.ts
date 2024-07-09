export interface DescribeRegionsResponse {
    /**
     * 当前请求的requestID
     * @example `E7B7D598-B080-5C8E-AA35-D43EC0D5F886`
     */
    requestId: string;
    /**
     * 返回结果。
     */
    result: {
        /**
         * 区域名称
         * @example `China (Hangzhou)`
         */
        localName: string;
        /**
         * 接入点地址
         * @example `endpoint`
         */
        endpoint: string;
        /**
         * 区域ID
         * cn-hangzhou  华东1（杭州）
         * cn-shanghai  华东2（上海）
         * cn-qingdao  华北1（青岛）
         * cn-beijing  华北2（北京）
         * cn-zhangjiakou  华北3（张家口）
         * cn-shenzhen  华南1（深圳）
         * ap-southeast-1  新加坡
         * cn-internal  内网中心
         * cn-zhangbei-in 内网张北
         * us-west-1-in  内网美国
         * cn-daily  日常
         * cn-test  联调
         * pre-hangzhou  预发杭州
         * @example `cn-hangzhou`
         */
        regionId: string;
    }[];
}
