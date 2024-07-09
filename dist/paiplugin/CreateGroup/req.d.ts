export interface CreateGroupRequest {
    /**
     * 请求参数的主体信息。
     */
    "body"?: {
        /**
         * 关联算法，人群来源为算法时需指定。
         * @example `user_recall`
         */
        Algorithm: string;
        /**
         * 手机号列名，人群来源为CSV文件，MaxCompute，并且包含手机号时需指定。
         * @example `phone`
         */
        Column: string;
        /**
         * 过滤条件，人群来源为MaxCompute时可指定。
         * @example `ds=20220101`
         */
        Filter: string;
        /**
         * 预测任务ID，人群来源为算法。
         * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
         */
        InferenceJobId: string;
        /**
         * 人群名称。
         * @example `VIP客户`
         */
        Name: string;
        /**
         * 是否包含手机号，包含手机号的人群可用于触达计划。
         * @example `true`
         */
        PhoneNumber: boolean;
        /**
         * MaxCompute(ODPS)项目名，人群来源为MaxCompute时需指定。
         * @example `project`
         */
        Project: string;
        /**
         * 人群备注。
         * @example `充值大于10万`
         */
        Remark: string;
        /**
         * 人群来源。
         * - 0: 文本，每行一个手机号，最多100个。
         * - 1: 文本文件，每行一个手机号，可通过控制台上传或指定自定义OSS地址，指定自定义OSS地址前需确保已在控制台完成一键授权。
         * - 2: CSV文件，需指定手机号列名，可通过控制台上传或指定自定义OSS地址，指定自定义OSS地址前需确保已在控制台完成一键授权。
         * - 3: MaxCompute(ODPS)表，需指定手机号列名。
         * - 4: 算法。
         * @example `0`
         */
        Source: number;
        /**
         * MaxCompute(ODPS)表名，人群来源为MaxCompute时需指定。
         * @example `vip_recall`
         */
        Table: string;
        /**
         * 文本，人群来源为文本时需指定。
         * @example `1390000****`
         */
        Text: string;
        /**
         * 文件地址，人群来源为文本文件，CSV文件时需指定。
         * @example `https://bucket.region.aliyuncs.com/folder/file`
         */
        Uri: string;
    };
}
