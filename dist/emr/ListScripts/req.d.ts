export interface ListScriptsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 标记当前开始读取的位置。
     * @example `dd6b1b2a-5837-5237-abe4-ff0c89568980`
     */
    "NextToken"?: string;
    /**
     * 一次获取的最大记录数。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 集群脚本类型。取值范围：
     * - BOOTSTRAP：引导脚本。
     * - NORMAL：普通集群脚本。
     * @example `BOOTSTRAP`
     */
    "ScriptType": string;
}
