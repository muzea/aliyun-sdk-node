export interface CreateBucketDataRedundancyTransitionResponse {
    /**
     * 存储冗余转换任务的容器。
     */
    BucketDataRedundancyTransition: {
        /**
         * 存储冗余转换任务的ID。该ID可以用于后续查看、删除存储冗余转换任务。
         * @example `
        4be5beb0f74f490186311b268bf6****`
         */
        TaskId: string;
    };
}
