export interface DescribeFilesetsResponse {
    /**
     * 请求ID。
     * @example `2D69A58F-345C-4FDE-88E4-BF518948****`
     */
    RequestId: string;
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=`
     */
    NextToken: string;
    /**
     * 文件系统ID。
     * @example `cpfs-099394bd928c****`
     */
    FileSystemId: string;
    Entries: {
        /**
         * Fileset信息集合。
         */
        Entrie: {
            /**
             * Fileset的描述。
             * @example `公共事务目录。`
             */
            Description: string;
            /**
             * Fileset的路径。
             * @example `pathtoroot/fset`
             */
            FileSystemPath: string;
            /**
             * Fileset ID。
             * @example `fset-1902718ea0ae****`
             */
            FsetId: string;
            /**
             * Fileset的状态。包括：
             * - CREATING：正在创建Fileset。
             * - CREATED：Fileset已创建完成，正常运行中。
             * - RELEASING：Fileset正在释放中。
             * - RELEASED：Fileset已删除。
             * @example `CREATED`
             */
            Status: string;
            /**
             * Fileset的创建时间。
             * 执行ISO8601标准表示，返回格式：`yyyy-MM-ddTHH:mm:ssZ`。
             * @example `2021-09-30T10:08:08Z`
             */
            CreateTime: string;
            /**
             * Fileset的最近一次更新时间。
             * 执行ISO8601标准表示，返回格式：yyyy-MM-ddTHH:mm:ssZ。
             * @example `2021-09-30T10:08:08Z`
             */
            UpdateTime: string;
            /**
             * 实例释放保护属性，指定是否支持通过控制台或API（[DeleteFileset](~~2402263~~)）释放实例。
             * -   true：开启实例释放保护。
             * -   false：关闭实例释放保护。
             * > 该属性只能限制手动释放操作，对系统释放操作不生效。
             * @example `true`
             */
            DeletionProtection: boolean;
        }[];
    };
}
