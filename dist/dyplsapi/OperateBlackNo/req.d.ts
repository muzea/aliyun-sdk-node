export interface OperateBlackNoRequest {
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面获取**号码池Key**。
     * @example `FC123456****`
     */
    "PoolKey": string;
    /**
     * 需要操作的黑名单号码。
     * > 仅支持操作**号池黑名单**类型的号码。
     * @example `150****0000`
     */
    "BlackNo": string;
    /**
     * 黑名单操作类型。取值：
     * - **AddBlack**：新增黑名单。
     * - **DeleteBlack**：删除黑名单。
     * @example `AddBlack`
     */
    "OperateType": string;
    /**
     * 备注信息。
     * @example `abcdef`
     */
    "Tips"?: string;
}
