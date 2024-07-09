export interface GetAssetsPropertyItemRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - zh：中文
     * - en：英文
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 设置是否强制刷新待查询数据。取值：
     * - **true**：强制刷新
     * - **false**：不强制刷新
     * @example `false`
     */
    "ForceFlush"?: boolean;
    /**
     * 要查询的资产指纹的类型，默认值为**sca**。取值：
     * - **lkm**：内核模块
     * - **autorun**：启动项
     * - **web_server**：Web站点
     * @example `lkm`
     */
    "Biz": string;
    /**
     * 设置查询条件的类型，根据**Biz**参数设置不同的聚合搜索条件。取值：
     * - **Biz**取值为**web_server**时，**SearchItem**支持的搜索条件如下：
     *     - **domain**：域名
     * - **Biz**取值为**lkm**时，**SearchItem**支持的搜索条件如下：
     *     - **module_name**：模块名称
     * - **Biz**取值为**autorun**时，**SearchItem**支持的搜索条件如下：
     *     - **path**：自启动项路径
     * > **SearchItem**和**SearchInfo**这两个参数配合使用，通过同时设置这两个参数（设置一个无效），您可以按照资产指纹的名称查看指定名称资产指纹的所有数据。
     * @example `path`
     */
    "SearchItem"?: string;
    /**
     * 要查询的内容。根据**SearchItem**取值的不同，您需要输入不同的查询内容：
     * - **SearchItem**取值为**domain**时，您需要输入的查询条件为资产指纹的域名。
     * - **SearchItem**取值为**module_name**时，您需要输入的查询条件为资产指纹的模块名称。
     * - **SearchItem**取值为**path**时，您需要输入的查询条件为资产指纹的自启动项路径。
     * > **SearchItem**和**SearchInfo**这两个参数配合使用，通过同时设置这两个参数（设置一个无效），您可以按照资产指纹的名称查看指定名称资产指纹的所有数据。
     * @example `/lib/systemd/s****`
     */
    "SearchInfo"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
}
