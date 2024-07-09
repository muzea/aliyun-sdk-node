export interface GetAdaptationRequest {
    /**
     * 应用版本ID。
     * > `AppVersionId`和`AdaptApplyId`二选一，如果两者都填，以本参数为准。
     * @example `5435****`
     */
    "AppVersionId"?: string;
    /**
     * 适配申请ID。
     * > `AppVersionId`和`AdaptApplyId`二选一。
     * @example `1432****`
     */
    "AdaptApplyId"?: number;
}
