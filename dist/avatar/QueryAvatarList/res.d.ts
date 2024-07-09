export interface QueryAvatarListResponse {
    /**
     * 请求ID
     * @example `13E0445E-CA7F-5DD3-9B0F-D4B39E0180F7`
     */
    RequestId: string;
    /**
     * 返回错误码
     * @example `10050008`
     */
    Code: string;
    /**
     * 错误消息
     * @example `这个一个错误消息。`
     */
    Message: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回实际数据对象
     */
    Data: {
        /**
         * 总数
         * @example `4`
         */
        TotalCount: number;
        /**
         * 当前页码
         * @example `1`
         */
        PageNo: number;
        /**
         * 分页大小
         * @example `10`
         */
        PageSize: number;
        /**
         * 总页数
         * @example `1`
         */
        TotalPage: number;
        /**
         * 人物列表
         */
        List: {
            /**
             * 人物code
             * @example `CH_2d_37AsLhUrBxacjHP0`
             */
            Code: string;
            /**
             * 人物名称
             * @example `博远`
             */
            Name: string;
            /**
             * 人物缩略图
             * @example `https://virtual-human-assets.oss-cn-beijing.aliyuncs.com/2d_assets/xxx/xxx/xxx.png?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx`
             */
            Image: string;
            /**
             * 人物头像
             * @example `https://virtual-human-assets.oss-cn-beijing.aliyuncs.com/2d_assets/xxx/xxx/xxx.png?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx`
             */
            Portrait: string;
            /**
             * 人物描述
             * @example `朝气蓬勃，富有感染力，适用于播音、传媒广电、企业宣传等场景`
             */
            Description: string;
            /**
             * 人物类型：
             * - 0 官方人物
             * - 1 定制化人物
             * @example `0`
             */
            AvatarType: string;
            /**
             * 模型类型：
             * - 2d 只查询2d人物
             * - 3d 只查询3d人物
             * @example `2d`
             */
            ModelType: string;
            /**
             * 支持的分辨率
             */
            SupportedResolutions: {
                /**
                 * 离线场景分辨率
                 */
                Offline: {
                    /**
                     * 宽度，单位为像素（px）
                     * @example `1080`
                     */
                    Width: number;
                    /**
                     * 高度，单位为像素（px）
                     * @example `1920`
                     */
                    Height: number;
                    /**
                     * 分辨率描述
                     * @example `1080P竖向，分辨率1080*1920`
                     */
                    Desc: string;
                }[];
                /**
                 * 实时场景分辨率
                 */
                Online: {
                    /**
                     * 宽度，单位为像素（px）
                     * @example `1080`
                     */
                    Width: number;
                    /**
                     * 高度，单位为像素（px）
                     * @example `1920`
                     */
                    Height: number;
                    /**
                     * 分辨率描述
                     * @example `1080P竖向，分辨率1080*1920`
                     */
                    Desc: string;
                }[];
            };
            /**
             * 2D自定义人物创建制作状态，目前仅针对于2d人物的查询
             * - 1: 创建中
             * - 2: 创建失败
             * - 3: 创建成功
             * @example `2`
             */
            MakeStatus: string;
            /**
             * 2D自定义人物创建制作失败原因，目前仅针对于2d人物的查询
             * @example `当前视频时长:6(s)，最小支持180(s)`
             */
            MakeFailReason: string;
            /**
             * 2D自定义人物创建制作阶段，目前仅针对于2d人物的查询
             * - 1、系统检测
             * - 2、人工审核
             * - 3、训练中
             * - 4、创建成功
             * @example `1`
             */
            MakeStage: string;
            /**
             * 2D人物预览视频
             * @example `https://xxx/xx/preview.webm
            `
             */
            Preview: string;
        }[];
    };
}
