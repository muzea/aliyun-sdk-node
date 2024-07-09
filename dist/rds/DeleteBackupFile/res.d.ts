export interface DeleteBackupFileResponse {
    /**
     * 请求ID。
     * @example `C7B3A91C-0ACD-4948-ACAE-****`
     */
    RequestId: string;
    DeletedBaksetIds: {
        /**
         * 删除的备份集ID列表。
         */
        DeletedBaksetIds: number[];
    };
}
