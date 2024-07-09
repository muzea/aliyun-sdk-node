export interface JoinWebLockProcessWhiteListRequest {
    /**
     * 要录入防篡改进程白名单的服务器UUID列表，多台服务器UUID之间使用半角逗号（,）隔开。
     * @example `0c1714dc-f7a3-4265-8364-7aa3fce8****,1cc45e7d-7698-4b2c-89d8-e8cba407****`
     */
    "Uuids"?: string;
    /**
     * 进程路径列表。
     */
    "ProcessPaths"?: string[];
}
