export interface ListFlowControlTaskItemReportsResponse {
    /**
     * 请求ID。
     * @example `D486768B-8BF8-4D80-B491-43DC3D0AF8AB`
     */
    requestId: string;
    /**
     * 返回参数。
     */
    result: {
        /**
         * 数据列表。
         */
        detail: {
            /**
             * 流量调控任务ID。
             * @example `1666669577221`
             */
            taskId: string;
            /**
             * 物品ID。
             * @example `123`
             */
            itemId: string;
            /**
             * 物品Type。
             * @example `video`
             */
            itemType: string;
            /**
             * 当天曝光量排名。
             * @example `12`
             */
            taskRank: string;
            /**
             * 物品当天曝光量。
             * @example `100`
             */
            itemPv: string;
            /**
             * 任务当天曝光量。
             * @example `50`
             */
            taskPv: string;
            /**
             * 物品当天曝光占比。
             * @example `10.12`
             */
            pvPercent: string;
            /**
             * 物品当天点击量。
             * @example `100`
             */
            itemClick: string;
            /**
             * 任务当天点击量。
             * @example `100`
             */
            taskClick: string;
            /**
             * 物品当天点击占比。
             * @example `1.23`
             */
            clickPercent: string;
            /**
             * 物品当天点击率。
             * @example `2.34`
             */
            itemCtr: string;
            /**
             * 任务当天点击率。
             * @example `1.23`
             */
            taskCtr: string;
            /**
             * 累计曝光量排名。
             * @example `10`
             */
            accTaskRank: string;
            /**
             * 物品累计曝光量。
             * @example `500`
             */
            accItemPv: string;
            /**
             * 任务累计曝光量。
             * @example `200`
             */
            accTaskPv: string;
            /**
             * 物品累计曝光占比。
             * @example `20.12`
             */
            accPvPercent: string;
            /**
             * 物品累计点击量。
             * @example `1000`
             */
            accItemClick: string;
            /**
             * 任务累计点击量。
             * @example `600`
             */
            accTaskClick: string;
            /**
             * 物品累计点击占比。
             * @example `3.24`
             */
            accClickPercent: string;
            /**
             * 物品累计点击率。
             * @example `4.56`
             */
            accItemCtr: string;
            /**
             * 任务累计点击率。
             * @example `3.22`
             */
            accTaskCtr: string;
        }[];
    };
}
