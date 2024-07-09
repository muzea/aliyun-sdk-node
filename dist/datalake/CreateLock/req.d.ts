export interface CreateLockRequest {
    /**
     * body
     */
    "Body"?: {
        /**
         * LockObjList
         * @example `{"databaseName":"db","tableName":"test"}`
         */
        LockObjList: any[];
    };
}
