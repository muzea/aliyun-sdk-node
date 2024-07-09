export interface AddToMetaCategoryRequest {
    /**
     * 类目的ID。
     * @example `5`
     */
    "CategoryId": number;
    /**
     * 表的唯一标识。
     * @example `odps.engine_name.table_name`
     */
    "TableGuid": string;
}
