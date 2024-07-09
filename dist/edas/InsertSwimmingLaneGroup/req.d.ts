export interface InsertSwimmingLaneGroupRequest {
    /**
     * 泳道组名称。
     * @example `test`
     */
    "Name": string;
    /**
     * 入口应用。格式为：EDAS:{应用ID}。
     * @example `EDAS:5cc89013-9232-4b36-b3eb-ff89b3d2****`
     */
    "EntryApp": string;
    /**
     * 泳道组涉及所有应用ID列表，多个应用之间使用半角逗号（,）分隔。
     * @example `bdb251cc-02a6-48dd-891b-2ab21b25****,ee33ed0c-fddc-47b5-9f63-e1ccc4be****`
     */
    "AppIds": string;
    /**
     * 自定义命名空间的RegionId。格式为：`物理Region:自定义命名空间标识符`，例如`cn-hangzhou:test`。
     * @example `cn-hangzhou:test`
     */
    "LogicalRegionId": string;
}
