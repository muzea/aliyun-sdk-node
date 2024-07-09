export interface RollbackApplicationRequest {
    /**
     * 应用ID。可以通过调用ListApplication接口获取，具体操作，请参见[ListApplication](~~423162~~)。
     * @example `3616cdca-4f92-4413-************`
     */
    "AppId": string;
    /**
     * 设置应用要回滚到的历史版本。请根据调用ListHistoryDeployVersion接口返回的`PackageVersion`填写，具体操作，请参见[ListHistoryDeployVersion](~~423163~~)。
     * @example `2019-11-13 14:22:22`
     */
    "HistoryVersion": string;
    /**
     * 应用分组ID。可以调用ListDeployGroup接口获取，具体操作，请参见[ListDeployGroup](~~423184~~)。
     * <note>如果需要回滚全部分组的应用，请设置为`all`。</note>
     * @example `8123db90-880f-48***************`
     */
    "GroupId": string;
    /**
     * 分批次数。默认1批，最多5批。
     * @example `1`
     */
    "Batch"?: number;
    /**
     * 分批间等待时间，默认0表示不等待，最多等待5分钟。
     * @example `0`
     */
    "BatchWaitTime"?: number;
}
