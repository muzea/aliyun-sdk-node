export interface QueryMediaCensorJobListResponse {
    MediaCensorJobList: {
        /**
         * 媒体审核作业列表。
         */
        MediaCensorJob: {
            /**
             * 任务创建时间。
             * @example `2021-11-04T07:25:48Z
            `
             */
            CreationTime: string;
            /**
             * 完成时间。
             * @example `2021-11-04T07:25:50Z
            `
             */
            FinishTime: string;
            /**
             * 处理建议。可取值：
             * - **pass**：通过
             * - **review**：人工重审
             * - **block**：拦截
             * @example `pass`
             */
            Suggestion: string;
            CoverImageCensorResults: {
                /**
                 * 封面图片审查结果列表。
                 */
                CoverImageCensorResult: {
                    /**
                     * 封面图片的OSS Object。
                     * @example `test/ai/censor/v2/vme-****.jpg
                    `
                     */
                    Object: string;
                    /**
                     * 封面图片的OSS Object。
                     * @example `oss-cn-shanghai`
                     */
                    Location: string;
                    /**
                     * 封面图片的OSS Bucket。
                     * @example `example-Bucket-****
                    `
                     */
                    Bucket: string;
                    Results: {
                        /**
                         * 作业审核结果。
                         */
                        Result: {
                            /**
                             * 作业整体审核结果。取值：
                             * - **pass**：通过。
                             * - **review**：人工重审。
                             * - **block**：拦截。
                             * > 任何一种类型的审核结果是review时，整体结果为review，任何一种类型的审核结果是block时，整体结果为block。
                             * @example `pass`
                             */
                            Suggestion: string;
                            /**
                             * 审核结果的标签，多个使用半角逗号（,）分隔。
                             * - 图片智能鉴黄（porn）审核结果分类：
                             *     - **nomal**：正常。
                             *     - **sexy**：性感。
                             *     - **porn**：色情。
                             * - 图片暴恐涉政（terrorism）结果分类：
                             *     - **naomal**：正常。
                             *     - **bloody**：血腥。
                             *     - **explosion**：爆炸烟光。
                             *     - **outfit**：特殊装束。
                             *     - **logo**：特殊标识。
                             *     - **weapon**：武器。
                             *     - **polotocs**：涉政。
                             *     - **violence**：打斗。
                             *     - **crowd**：聚众。
                             *     - **parade**：游行。
                             *     - **carcrash**：车祸现场。
                             *     - **flag**：旗帜。
                             *     - **location**：地标。
                             *     - **others**：其他。
                             * - 图文违规（ad）结果分类：
                             *     - **normal**：正常。
                             *     - **ad**：其他广告。
                             *     - **politics**：文字含涉政内容。
                             *     - **porn**：文字含涉黄内容。
                             *     - **abuse**：文字含辱骂内容。
                             *     - **terrorism**：文字含暴恐内容。
                             *     - **contraband**：文字含违禁内容。
                             *     - **spam**：文字含其他垃圾内容。
                             *     - **npx**：牛皮藓广告。
                             *     - **qrcode**：含二维码。
                             *     - **programCode**：含小程序码。
                             * - 图片不良场景（live）结果分类：
                             *     - **normal**：正常。
                             *     - **meaningless**：图片中无内容（例如黑屏、白屏）。
                             *     - **PIP**：画中画。
                             *     - **smoking**：吸烟。
                             *     - **drivelive**：车内直播。
                             * - 图片logo（logo）结果分类：
                             *     - **normal**：正常。
                             *     - **TV**：含受管控的Logo。
                             *     - **trademark**：含商标。
                             * @example `normal`
                             */
                            Label: string;
                            /**
                             * 审核场景。
                             * - **porn**：鉴黄
                             * - **terrorism**：暴恐涉政
                             * - **ad**：图文违规
                             * - **live**：不良场景
                             * - **logo**：图片logo
                             * @example `live`
                             */
                            Scene: string;
                            /**
                             * 分值。可取值：0~100。
                             * @example `100`
                             */
                            Rate: string;
                        }[];
                    };
                }[];
            };
            /**
             * 作业状态。
             * @example `Success`
             */
            State: string;
            /**
             * 标题审核结果。
             */
            TitleCensorResult: {
                /**
                 * 处理建议。取值：
                 * - **pass**：通过
                 * - **review**：人工重审
                 * - **block**：拦截
                 * @example `block`
                 */
                Suggestion: string;
                /**
                 * 审核结果的标签，多个使用半角逗号（,）分隔。
                 * - **normal**：普通
                 * - **spam**：含垃圾信息
                 * - **ad**：广告
                 * - **abuse**：辱骂
                 * - **flood**：灌水
                 * - **contraband**：违禁
                 * - **meaningless**：无意义
                 * @example `meaningless`
                 */
                Label: string;
                /**
                 * 审核场景。取固定值：**antispam**，文本反垃圾。
                 * @example `antispam`
                 */
                Scene: string;
                /**
                 * 分值。可取值：0~100。
                 * @example `100`
                 */
                Rate: string;
            };
            /**
             * 作业失败时错误信息。执行成功时不返回此参数。
             * @example `The resource operated cannot be found`
             */
            Message: string;
            /**
             * 作业输入。
             */
            Input: {
                /**
                 * 输入文件的OSS Object。
                 * @example `test/ai/censor/test-****.mp4`
                 */
                Object: string;
                /**
                 * 输入文件的OSS Location。
                 * @example `oss-cn-shanghai
                `
                 */
                Location: string;
                /**
                 * 输入文件的OSS Bucket。
                 * @example `bucket-test-in-****`
                 */
                Bucket: string;
            };
            /**
             * 弹幕审核结果。
             */
            BarrageCensorResult: {
                /**
                 * 处理建议。取值：
                 * - **pass**：通过
                 * - **review**：人工重审
                 * - **block**：拦截
                 * @example `pass`
                 */
                Suggestion: string;
                /**
                 * 审核结果的标签，多个使用半角逗号（,）分隔。
                 * - **normal**：普通
                 * - **spam**：含垃圾信息
                 * - **ad**：广告
                 * - **abuse**：辱骂
                 * - **flood**：灌水
                 * - **contraband**：违禁
                 * - **meaningless**：无意义
                 * @example `normal`
                 */
                Label: string;
                /**
                 * 审核场景。取固定值：**antispam**，文本反垃圾。
                 * @example `antispam`
                 */
                Scene: string;
                /**
                 * 分值。可取值：0~100。
                 * @example `99.91`
                 */
                Rate: string;
            };
            /**
             * 描述审核结果。
             */
            DescCensorResult: {
                /**
                 * 处理建议。取值：
                 * - **pass**：通过
                 * - **review**：人工重审
                 * - **block**：拦截
                 * @example `pass`
                 */
                Suggestion: string;
                /**
                 * 审核结果的标签，多个使用半角逗号（,）分隔。
                 * - **normal**：普通
                 * - **spam**：含垃圾信息
                 * - **ad**：广告
                 * - **abuse**：辱骂
                 * - **flood**：灌水
                 * - **contraband**：违禁
                 * - **meaningless**：无意义
                 * @example `normal`
                 */
                Label: string;
                /**
                 * 审核场景。取固定值：**antispam**，文本反垃圾。
                 * @example `antispam`
                 */
                Scene: string;
                /**
                 * 分值。可取值：0~100。
                 * @example `100`
                 */
                Rate: string;
            };
            /**
             * 视频审查配置。
             */
            VideoCensorConfig: {
                /**
                 * 视频截图结果的保存地址。
                 */
                OutputFile: {
                    /**
                     * 截图输出文件 （OSS Object）。
                     * > 示例中{Count}是占位符，图片Object依次为`output00001-****.jpg,output00002-****.jpg`等。
                     * @example `output{Count}.jpg`
                     */
                    Object: string;
                    /**
                     * 截图输出OSS Bucket所在的OSS Location。
                     * @example `oss-cn-shanghai
                    `
                     */
                    Location: string;
                    /**
                     * 截图输出文件所在OSS Bucket。
                     * @example `test-bucket-****
                    `
                     */
                    Bucket: string;
                };
                /**
                 * 是否需要审核视频内容。默认值：**true**。可取值：
                 * - **true**：审核
                 * - **false**：不审核
                 * @example `true`
                 */
                VideoCensor: string;
                /**
                 * 审核模板。默认common（默认模板）。
                 * > 不填默认为common，如果是通过提交工单自定义的审核模板，此项返回UID。
                 * @example `common`
                 */
                BizType: string;
            };
            /**
             * 媒体审核作业ID。
             * @example `f8f166eea7a44e9bb0a4aecf9543`
             */
            JobId: string;
            /**
             * 用户自定义数据。
             * @example `example userdata ****
            `
             */
            UserData: string;
            /**
             * 作业失败时错误码。执行成功时此参数不返回。
             * @example `InvalidParameter.ResourceNotFound`
             */
            Code: string;
            /**
             * 视频审查结果。
             */
            VensorCensorResult: {
                VideoTimelines: {
                    /**
                     * 详细时间点的审核结果，按照时间从小到大排序。
                     */
                    VideoTimeline: {
                        /**
                         * 视频中的位置。格式：`hh:mm:ss[.SSS]`。
                         * @example `00:02:59.999`
                         */
                        Timestamp: string;
                        /**
                         * 截图输出文件 （OSS Object）。
                         * > 示例中{Count}是占位符，图片Object依次为`output00001-****.jpg`，`output00002-****.jpg`等。
                         * @example `output{Count}.jpg`
                         */
                        Object: string;
                        CensorResults: {
                            /**
                             * 包含多种类型审核结果的标签、分值等。
                             */
                            CensorResult: {
                                /**
                                 * 处理建议。取值：
                                 * - **pass**：通过
                                 * - **review**：人工重审
                                 * - **block**：拦截
                                 * @example `block`
                                 */
                                Suggestion: string;
                                /**
                                 * 审核结果的标签，多个使用半角逗号（,）分隔。
                                 * - 图片智能鉴黄（porn）审核结果分类：
                                 *     - **nomal**：正常。
                                 *     - **sexy**：性感。
                                 *     - **porn**：色情。
                                 * - 图片暴恐涉政（terrorism）结果分类：
                                 *     - **naomal**：正常。
                                 *     - **bloody**：血腥。
                                 *     - **explosion**：爆炸烟光。
                                 *     - **outfit**：特殊装束。
                                 *     - **logo**：特殊标识。
                                 *     - **weapon**：武器。
                                 *     - **polotocs**：涉政。
                                 *     - **violence**：打斗。
                                 *     - **crowd**：聚众。
                                 *     - **parade**：游行。
                                 *     - **carcrash**：车祸现场。
                                 *     - **flag**：旗帜。
                                 *     - **location**：地标。
                                 *     - **others**：其他。
                                 * - 图文违规（ad）结果分类：
                                 *     - **normal**：正常。
                                 *     - **ad**：其他广告。
                                 *     - **politics**：文字含涉政内容。
                                 *     - **porn**：文字含涉黄内容。
                                 *     - **abuse**：文字含辱骂内容。
                                 *     - **terrorism**：文字含暴恐内容。
                                 *     - **contraband**：文字含违禁内容。
                                 *     - **spam**：文字含其他垃圾内容。
                                 *     - **npx**：牛皮藓广告。
                                 *     - **qrcode**：含二维码。
                                 *     - **programCode**：含小程序码。
                                 * - 图片不良场景（live）结果分类：
                                 *     - **normal**：正常。
                                 *     - **meaningless**：图片中无内容（例如黑屏、白屏）。
                                 *     - **PIP**：画中画。
                                 *     - **smoking**：吸烟。
                                 *     - **drivelive**：车内直播。
                                 * - 图片logo（logo）结果分类：
                                 *     - **normal**：正常。
                                 *     - **TV**：含受管控的Logo。
                                 *     - **trademark**：含商标。
                                 * @example `normal`
                                 */
                                Label: string;
                                /**
                                 * 审核场景。
                                 * - **porn**：鉴黄。
                                 * - **terrorism**：暴恐涉政。
                                 * - **ad**：图文违规。
                                 * - **live**：不良场景。
                                 * - **logo**：图片logo。
                                 * @example `porn`
                                 */
                                Scene: string;
                                /**
                                 * 分值。可取值：0~100。
                                 * @example `100`
                                 */
                                Rate: string;
                            }[];
                        };
                    }[];
                };
                /**
                 * 下一页标识。
                 * @example `ea04afcca7cd4e80b9ece8fbb251`
                 */
                NextPageToken: string;
                CensorResults: {
                    /**
                     * 审核结果集合，包含各种场景（黄、暴、恐、政）的概要信息。
                     */
                    CensorResult: {
                        /**
                         * 处理建议。取值：
                         * - **pass**：通过。
                         * - **review**：人工重审。
                         * - **block**：拦截。
                         * @example `pass`
                         */
                        Suggestion: string;
                        /**
                         * 审核结果的标签，多个使用半角逗号（,）分隔。
                         * - 图片智能鉴黄（porn）审核结果分类：
                         *     - **nomal**：正常。
                         *     - **sexy**：性感。
                         *     - **porn**：色情。
                         * - 图片暴恐涉政（terrorism）结果分类：
                         *     - **naomal**：正常。
                         *     - **bloody**：血腥。
                         *     - **explosion**：爆炸烟光。
                         *     - **outfit**：特殊装束。
                         *     - **logo**：特殊标识。
                         *     - **weapon**：武器。
                         *     - **polotocs**：涉政。
                         *     - **violence**：打斗。
                         *     - **crowd**：聚众。
                         *     - **parade**：游行。
                         *     - **carcrash**：车祸现场。
                         *     - **flag**：旗帜。
                         *     - **location**：地标。
                         *     - **others**：其他。
                         * - 图文违规（ad）结果分类：
                         *     - **normal**：正常。
                         *     - **ad**：其他广告。
                         *     - **politics**：文字含涉政内容。
                         *     - **porn**：文字含涉黄内容。
                         *     - **abuse**：文字含辱骂内容。
                         *     - **terrorism**：文字含暴恐内容。
                         *     - **contraband**：文字含违禁内容。
                         *     - **spam**：文字含其他垃圾内容。
                         *     - **npx**：牛皮藓广告。
                         *     - **qrcode**：含二维码。
                         *     - **programCode**：含小程序码。
                         * - 图片不良场景（live）结果分类：
                         *     - **normal**：正常。
                         *     - **meaningless**：图片中无内容（例如黑屏、白屏）。
                         *     - **PIP**：画中画。
                         *     - **smoking**：吸烟。
                         *     - **drivelive**：车内直播。
                         * - 图片logo（logo）结果分类：
                         *     - **normal**：正常。
                         *     - **TV**：含受管控的Logo。
                         *     - **trademark**：含商标。
                         * @example `meaningless`
                         */
                        Label: string;
                        /**
                         * 审核场景。
                         * - **porn**：鉴黄。
                         * - **terrorism**：暴恐涉政。
                         * - **ad**：图文违规。
                         * - **live**：不良场景。
                         * - **logo**：图片Logo。
                         * @example `ad`
                         */
                        Scene: string;
                        /**
                         * 分值。可取值：0~100。
                         * @example `100`
                         */
                        Rate: string;
                    }[];
                };
            };
            /**
             * 管道ID。
             * @example `c5b30b7c0d0e4a0abde1d5f9e751****
            `
             */
            PipelineId: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `D1D5C080-8E2F-5030-8AB4-13092F17631B
    `
     */
    RequestId: string;
    /**
     * 下一页标识，32位UUID。查询结果大于一页时返回，每次查询值都会更新。
     * @example `9b1a42bc6e8d46e6a1383b7e7f01****
    `
     */
    NextPageToken: string;
    NonExistIds: {
        /**
         * 不存在的作业ID列表。如果为空则不返回此参数。
         */
        String: string[];
    };
}
