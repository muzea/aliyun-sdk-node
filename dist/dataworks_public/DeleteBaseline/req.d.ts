export interface DeleteBaselineRequest {
    /**
     * 基线的ID，可以通过 [ListBaselines](~~2261507~~) 获取。
     * @example `1234`
     */
    "BaselineId": number;
    /**
     * 基线所监控的项目空间ID，可从 ListBaselines 获取。
     * @example `10000`
     */
    "ProjectId": number;
}
