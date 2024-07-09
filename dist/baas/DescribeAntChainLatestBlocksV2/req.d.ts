export interface DescribeAntChainLatestBlocksV2Request {
    /**
     * 区块链ID
     * @example `查询一条蚂蚁区块链最新的区块信息列表（仅适用于阿里云国内站`
     */
    "AntChainId": string;
    /**
     * 联盟ID
     * @example `M8GaMEyX`
     */
    "ConsortiumId"?: string;
}
