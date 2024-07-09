export interface DescribeCommandsResponse {
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 命令列表页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 命令总个数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2`
     */
    NextToken: string;
    Commands: {
        /**
         * 命令数据集类型。
         */
        Command: {
            /**
             * 命令创建时间。
             * @example `2020-11-17T06:52Z`
             */
            CreationTime: string;
            /**
             * 命令类型。
             * @example `RunShellScript`
             */
            Type: string;
            /**
             * 超时时间，单位：秒。
             * @example `3600`
             */
            Timeout: number;
            /**
             * 使用该命令创建的任务数。
             * @example `2`
             */
            InvokeTimes: number;
            /**
             * 命令ID。
             * @example `c-hz01272yr52****`
             */
            CommandId: string;
            /**
             * 执行路径。
             * @example `/home/`
             */
            WorkingDir: string;
            /**
             * 命令描述。
             * @example `testDescription`
             */
            Description: string;
            /**
             * 公共命令的版本。如果多个命令属于同一个`Provider`，且名称与类目相同，则这些命令属于同一个命令的不同版本。您手动创建的云助手命令不会返回该值。
             * @example `1`
             */
            Version: number;
            /**
             * 公共命令的提供者。
             * @example `AlibabaCloud.ECS.GuestOS`
             */
            Provider: string;
            /**
             * 命令内容，以Base64编码后传输。
             * - 若ContentEncoding指定PlainText，返回原始脚本内容。
             * - 若ContentEncoding指定Base64，返回Base64编码后的脚本内容。
             * @example `Y2QgL3Jvb3Q=`
             */
            CommandContent: string;
            /**
             * 公共命令的类目。
             * @example `“”`
             */
            Category: string;
            /**
             * 公共命令是否是最新版本。如果多个命令属于同一个`Provider`，且名称与类目相同，则这些命令属于同一个命令的不同版本。您手动创建的云助手命令不会返回该值。
             * @example `true`
             */
            Latest: boolean;
            /**
             * 命令名称。
             * @example `testName`
             */
            Name: string;
            /**
             * 该命令是否启用自定义参数。
             * @example `true`
             */
            EnableParameter: boolean;
            /**
             * 命令所属的资源组ID。
             * @example `rg-123******`
             */
            ResourceGroupId: string;
            ParameterNames: {
                /**
                 * 通过创建命令时的commandcontent解析出的自定义参数名列表，以列表（list）的形式返回。如未使用自定义参数功能，则返回空值列表。
                 */
                ParameterName: string[];
            };
            ParameterDefinitions: {
                /**
                 * 自定义参数详细信息列表。
                 */
                ParameterDefinition: {
                    /**
                     * 该自定义参数是否必填。
                     * - true：是。
                     * - false：否。
                     * 默认值：false。
                     * @example `true`
                     */
                    Required: boolean;
                    /**
                     * 自定义参数描述。
                     * @example `云助手Agent安装包路径`
                     */
                    Description: string;
                    /**
                     * 自定义参数的默认值。
                     * @example `https://aliyun-client-assist.oss-accelerate.aliyuncs.com/linux/aliyun_assist_latest.rpm`
                     */
                    DefaultValue: string;
                    /**
                     * 自定义参数名称。
                     * @example `DownloadUrl`
                     */
                    ParameterName: string;
                    PossibleValues: {
                        /**
                         * 枚举类型自定义参数的可选值。
                         */
                        PossibleValue: string[];
                    };
                }[];
            };
            Tags: {
                /**
                 * 命令的标签信息。
                 */
                Tag: {
                    /**
                     * 命令的标签键。
                     * @example `owner`
                     */
                    TagKey: string;
                    /**
                     * 命令的标签值。
                     * @example `zhangsan`
                     */
                    TagValue: string;
                }[];
            };
        }[];
    };
}
