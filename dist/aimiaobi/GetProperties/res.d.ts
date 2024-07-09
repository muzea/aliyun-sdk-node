export interface GetPropertiesResponse {
    /**
     * 请求唯一标识
     * @example `3f7045e099474ba28ceca1b4eb6d6e21`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `DataNotExists`
     */
    Code: string;
    /**
     * 错误说明
     * @example `数据不存在`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 搜索源下拉列表
         */
        SearchSources: {
            /**
             * 搜索源code
             * @example `SystemSearch`
             */
            Value: string;
            /**
             * 搜索源名称
             * @example `夸克通用搜索`
             */
            Label: string;
        }[];
        /**
         * 通用配置表
         */
        GeneralConfigMap: any;
        /**
         * 用户配置
         */
        UserInfo: {
            /**
             * 用户id
             * @example `1`
             */
            UserId: string;
            /**
             * 用户名称
             * @example `admin`
             */
            Username: string;
            /**
             * 租户唯一标识
             * @example `1`
             */
            TenantId: string;
            /**
             * 业务空间唯一标识
             * @example `1`
             */
            AgentId: string;
        };
        /**
         * 控制台配置
         */
        ConsoleConfig: {
            /**
             * 标题
             * @example `AI妙笔`
             */
            Title: string;
            /**
             * 提示内容
             * @example `xx`
             */
            TipContent: string;
        };
        /**
         * 万相图片风格配置
         */
        WanxiangImageStyleConfig: {
            /**
             * 风格名称
             * @example `默认`
             */
            Name: string;
            /**
             * 风格code
             * @example `<auto>`
             */
            Value: string;
            /**
             * 风格图片地址
             * @example `https://img.alicdn.com/imgextra/i4/O1CN01RzKicz1W0YWzYkWcK_!!6000000002726-2-tps-132-104.png`
             */
            Pic: string;
        }[];
        /**
         * 万相图片
         */
        WanxiangImageSizeConfig: {
            /**
             * 图片尺寸比例
             * @example `1:1`
             */
            Name: string;
            /**
             * 图片尺寸像素
             * @example `1024*1024`
             */
            Value: string;
        }[];
        /**
         * SLR 是否已经授权
         * @example `true`
         */
        SlrAuthorized: boolean;
        /**
         * 通话配置
         */
        ChatConfig: any;
        /**
         * 智搜配置
         */
        IntelligentSearchConfig: {
            /**
             * 首页产品描述
             * @example `xxx`
             */
            ProductDescription: string;
            /**
             * 搜索源列表
             */
            SearchSources: {
                /**
                 * 数据集唯一标识: code+datasetName
                 * @example `xx`
                 */
                Code: string;
                /**
                 * 搜索源名称：中文
                 * @example `xx`
                 */
                Name: string;
                /**
                 * 数据集唯一标识: code+datasetName
                 * @example `xx`
                 */
                DatasetName: string;
            }[];
            /**
             * 智搜推荐
             */
            SearchSamples: {
                /**
                 * 提示词
                 * @example `xx`
                 */
                Prompt: string;
                /**
                 * 生成内容
                 * @example `xxx`
                 */
                Text: string;
                /**
                 * 文章列表
                 */
                Articles: {
                    /**
                     * 标题
                     * @example `xx`
                     */
                    Title: string;
                    /**
                     * 文章URL
                     * @example `http://xxx.com`
                     */
                    Url: string;
                    /**
                     * 前端传递时是否手动选择
                     * @example `true`
                     */
                    Select: boolean;
                    /**
                     * 是否为星标文章
                     * @example `false`
                     */
                    Stared: boolean;
                }[];
            }[];
        };
    };
}
