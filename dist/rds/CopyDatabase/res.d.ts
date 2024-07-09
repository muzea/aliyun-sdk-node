export interface CopyDatabaseResponse {
    /**
     * 数据库名称。
     * @example `test02`
     */
    DBName: string;
    /**
     * 任务ID。
     * @example `2562****`
     */
    TaskId: string;
    /**
     * 数据库状态，返回值如下：
     * * **Creating**：创建中。
     * * **Running**：使用中。
     * * **Deleting**：删除中。
     * @example ` Creating`
     */
    DBStatus: string;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
}
