export interface ListAssetSelectionSelectedTargetRequest {
    /**
     * 本次资产选择的唯一标识。
     * @example `2e6ab33d-4e00-4581-ac16-0dd1f9ad****`
     */
    "SelectionKey": string;
    /**
     * 查询列表。
     */
    "TargetList"?: string[];
}
