export interface DeleteEaisEiRequest {
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * EAIS实例ID。
     * @example `eais-hzu00xufs1c8j5nn****`
     */
    "EiInstanceId": string;
    /**
     * 实例状态不符合删除条件时，是否强制删除。取值范围：
     * - true：强制删除。
     * - false：不强制删除。
     * 默认值：false。
     * 实例状态与本参数说明如下：
     * - 当实例状态为**可绑定**时，无需设置本参数，实例会正常释放。
     * - 当实例不是**可绑定**状态时，可以设置本参数值为true来强制释放实例。
     * @example `false`
     */
    "Force"?: boolean;
}
