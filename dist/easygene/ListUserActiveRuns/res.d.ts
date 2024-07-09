export interface ListUserActiveRunsResponse {
    /**
     *
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     *
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     *
     * @example `10`
     */
    MaxResults: number;
    /**
     *
     * @example `MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK`
     */
    NextToken: string;
    /**
     *
     * @example `10`
     */
    TotalCount: number;
    Runs: {
        /**
         *
         * @example `MyApp`
         */
        AppName: string;
        /**
         *
         * @example `EasyGene`
         */
        Source: string;
        Labels: any;
        /**
         *
         * @example `test-run`
         */
        RunName: string;
        /**
         *
         * @example `1`
         */
        AppRevision: string;
        /**
         *
         * @example `run-13BeYuxc0fxO24uA75UppTiMRoQ`
         */
        RunId: string;
        /**
         *
         * @example `Running`
         */
        Status: string;
        /**
         *
         * @example `2021-06-10T13:30:20.414557061Z`
         */
        CreateTime: string;
        /**
         *
         * @example `2021-06-10T13:30:20.414557061Z`
         */
        StartTime: string;
        /**
         *
         * @example `2021-06-10T13:30:20.414557061Z`
         */
        EndTime: string;
        /**
         *
         * @example `sub-13BeXWnGvrOl3MC124tazcJVKaV`
         */
        SubmissionId: string;
        /**
         *
         * @example `s1`
         */
        EntityName: string;
        /**
         *
         * @example `sample`
         */
        EntityType: string;
        ExecuteDirectory: string;
        ExecuteOptions: {
            /**
             *
             * @example `false`
             */
            CallCaching: boolean;
            /**
             *
             * @example `false`
             */
            UseRelativeOutputPaths: boolean;
            /**
             *
             * @example `NoNewCalls`
             */
            FailureMode: string;
            /**
             *
             * @example `false`
             */
            DeleteIntermediateResults: boolean;
        };
        /**
         *
         * @example `{ "workflow1.task1.param1": "helloooo.txt", "workflow1.task1.param2": "abc", "workflow1.task2.param1": "new_helloooo.txt", "workflow1.task2.param2": "def" }`
         */
        Inputs: string;
        /**
         *
         * @example `{}`
         */
        DefaultRuntime: string;
        /**
         *
         * @example `test-workspace`
         */
        Workspace: string;
        /**
         *
         * @example `cn-beijing`
         */
        RegionId: string;
    }[];
}
