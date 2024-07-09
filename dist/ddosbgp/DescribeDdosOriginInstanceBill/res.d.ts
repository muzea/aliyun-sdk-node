export interface DescribeDdosOriginInstanceBillResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `72155560-F343-55C8-82FE-ED4D7E4AA97E`
     */
    RequestId: string;
    /**
     * 开通状态。取值：
     * - **1**：正常。
     * - **2**：过期。
     * - **3**：释放。
     * @example `1`
     */
    Status: number;
    /**
     * 欠费状态。取值：
     * - **0**：未欠费。
     * - **1**：欠费。
     * @example `0`
     */
    DebtStatus: number;
    /**
     * 要查询的防护包后付费实例ID。
     * @example `ddosorigin_cn-u7c3lcr9r02`
     */
    InstanceId: string;
    /**
     * 防护IP数量。
     * @example `15`
     */
    IpCount: number;
    /**
     * IP分布详情。JSON结构体包含以下字段：：
     * - **eipCnIpCount**：高防EIP中国内地IP数。
     * - **eipOvIpCount**：高防EIP国际和港澳台IP数。
     * - **standardAssetsCnIpCount**：标准云产品中国内地IP数。
     * - **standardAssetsOvIpCount**：标准云产品国际和港澳台IP数。
     * @example `{\"eipCnIpCount\":6,\"eipOvIpCount\":17,\"standardAssetsCnIpCount\":2,\"standardAssetsOvIpCount\":0}`
     */
    IpInfo: string;
    /**
     * 当月DDoS防护（增强版）EIP中国内地总流量，单位：字节。
     * @example `6302081067`
     */
    TotalFlowCn: number;
    /**
     * 当月DDoS防护（增强版）EIP国际和港澳台总流量，单位：字节。
     * @example `6204918019`
     */
    TotalFlowOv: number;
    /**
     * 当月标准云产品中国内地总流量。
     * @example `0`
     */
    StandardAssetsTotalFlowCn: number;
    /**
     * 当月标准云产品国际和港澳台总流量。
     * @example `0`
     */
    StandardAssetsTotalFlowOv: number;
    /**
     * 防护IP数和功能开通列表详情。
     */
    IpCountOrFunctionList: {
        /**
         * 防护资产区域。取值：
         * - **only_mainland_china**：仅中国内地。
         * - **global**：全球。
         * - **international_and_hmt**：非中国内地，包含国际和中国香港、中国澳门、中国台湾。
         * @example `global`
         */
        Coverage: string;
        /**
         * 后付费防护中国内地IP数量。
         * @example `5`
         */
        IpCntCn: number;
        /**
         * 后付费防护国际和港澳台IP数量。
         * @example `5`
         */
        IpCntOv: number;
        /**
         * 账单时间，单位：毫秒。
         * @example `1680278400000`
         */
        Time: number;
        /**
         * 账单分布的账号。JSON字段结构如下：
         * - **eipCnIpCount**：DDoS防护增强版EIP中国内地IP数。
         * - **eipOvIpCount**：DDoS防护增强版EIP国际和港澳台IP数。
         * - **memberUid**：所属账号。
         * - **standardAssetsCnIpCount**：标准云产品中国内地IP数。
         * - **standardAssetsOvIpCount**：标准云产品国际和港澳台IP数。
         * > JSON中memberUid为空则表示当前账号信息。
         * @example `[{\"eipCnIpCount\":3,\"eipOvIpCount\":18,\"memberUid\":\"\",\"standardAssetsCnIpCount\":2,\"standardAssetsOvIpCount\":0},{\"eipCnIpCount\":3,\"eipOvIpCount\":0,\"memberUid\":\"1776997906319249\",\"standardAssetsCnIpCount\":0,\"standardAssetsOvIpCount\":0}]`
         */
        MemberIpCnt: string;
    }[];
    /**
     * DDoS防护增强版EIP流量详情。
     */
    FlowList: {
        /**
         * DDoS防护增强版EIP流量，单位为byte。
         * @example `6302081067`
         */
        TotalFlow: number;
        /**
         * region对应的流量分布。JSON字段结构如下：
         * - **bytes**：DDoS防护增强版EIP对应region的流量大小，单位：byte。
         * - **instanceId**：DDoS防护增强版EIP对应的全局按量实例ID。
         * - **ip**：对应的高防EIP。
         * - **region**：区域。
         * @example `{\"cn-hangzhou\":[{\"bytes\":0,\"instanceId\":\"ddosorigin_cn-u7c3lcr9r02\",\"ip\":\"47.118.168.124\",\"region\":\"cn-hangzhou\"}]}`
         */
        RegionFlow: string;
        /**
         * 时间戳。单位：毫秒。
         * @example `1620951900`
         */
        Time: number;
        /**
         * region对应的流量分布。JSON字段结构如下：
         * - **bytes**：DDoS防护增强版EIP对应region的流量大小，单位：byte。
         * - **memberUid** 所属账号。
         * - **instanceId**：DDoS防护增强版EIP对应的全局按量实例ID。
         * - **ip**：对应的高防EIP。
         * - **region**：区域。
         * > JSON中memberUid为空则表示当前账号信息。JSON最外层bytes为总流量，内层bytes为账号对应的流量。
         * @example `[{\"bytes\":79282719,\"memberUid\":\"\",\"regionFlows\":{\"cn-hangzhou\":[{\"bytes\":79282719,\"instanceId\":\"ddosorigin_cn-u7c3lcr9r02\",\"ip\":\"47.118.168.57\",\"region\":\"cn-hangzhou\"}]}}]`
         */
        MemberFlow: string;
    }[];
    /**
     * 标准云产品流量信息。
     */
    StandardAssetsFlowList: {
        /**
         * 标准云产品流量，单位为byte。
         * @example `6302081067`
         */
        TotalFlow: number;
        /**
         * region对应的流量分布。JSON字段结构如下：
         * - **bytes**：标准云产品对应region的流量大小，单位：byte。
         * - **instanceId**：标准云产品对应的全局按量实例ID。
         * - **ip**：防护包实例对应的实例id。
         * - **region**：区域。
         * @example `{\"cn-hangzhou\":[{\"bytes\":0,\"instanceId\":\"ddosorigin_cn-u7c3lcr9r02\",\"ip\":\"47.118.168.124\",\"region\":\"cn-hangzhou\"}]}`
         */
        RegionFlow: string;
        /**
         * 时间戳，单位毫秒。
         * @example `1679846400000`
         */
        Time: number;
        /**
         * region对应的流量分布。JSON字段结构如下：
         * - **bytes**：标准云产品对应region的流量大小，单位：byte。
         * - **memberUid** 所属账号。
         * - **instanceId**：标准云产品对应的全局按量实例ID。
         * - **ip**：标准云产品对应的实例id。
         * - **region**：区域。
         * > JSON中memberUid为空则表示当前账号信息。JSON最外层bytes为总流量，内层bytes为账号对应的流量。
         * @example `[{\"bytes\":79282719,\"memberUid\":\"\",\"regionFlows\":{\"cn-hangzhou\":[{\"bytes\":79282719,\"instanceId\":\"ddosorigin_cn-u7c3lcr9r02\",\"ip\":\"47.118.168.57\",\"region\":\"cn-hangzhou\"}]}}]`
         */
        MemberFlow: string;
    }[];
    /**
     * DDoS防护（增强版）EIP的region流量分布信息。
     * @example `{'cn-hongkong': 166491566}`
     */
    FlowRegion: any;
    /**
     * 标准云产品的region流量分布信息。
     * @example `{'cn-hongkong': 166491566}
    `
     */
    StandardAssetsFlowRegion: any;
}
