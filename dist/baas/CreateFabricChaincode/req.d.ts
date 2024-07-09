export interface CreateFabricChaincodeRequest {
    /**
     * 组织ID
     * @example `peers-aaaaaa1-1oxw31d046jtl`
     */
    "OrganizationId": string;
    /**
     * 通道ID
     * @example `chan-first-channel-1w55v3u39x2xz`
     */
    "ChannelId": string;
    /**
     * 联盟ID
     * @example `consortium-aaaaaa-akpcsjjac2jd`
     */
    "ConsortiumId": string;
    /**
     * OSS桶地址
     * @example `https://chaincode.oss-cn-beijing.aliyuncs.com`
     */
    "OssBucket": string;
    /**
     * OSS对象地址
     * @example `aaaaaa1/a0cf8729-7d47-44c9-9ed5-6d2fdfc8dc2c/sacc.cc`
     */
    "OssUrl": string;
    /**
     * 背书策略：
     * - OR ('aaaaaa1MSP.peer','aaaaaa2MSP.peer',...)表示此通道中的任何一方背书即可。
     * - AND ('aaaaaa1MSP.peer','aaaaaa2MSP.peer',...)表示需要此通道中的所有组织背书。
     * - OutOf (a,'aaaaaa1MSP.peer','aaaaaa2MSP.peer',...)：当a为1时表示此通道中的任何一方背书即可；当a为2时表示至少需要两个通道中的组织背书才行；当a等于组织数时，背书情况等同于AND。
     * @example `OR ('aaaaaa1MSP.peer')`
     */
    "EndorsePolicy"?: string;
    /**
     * 位置信息
     * @example `cn-hangzhou`
     */
    "Location"?: string;
}
