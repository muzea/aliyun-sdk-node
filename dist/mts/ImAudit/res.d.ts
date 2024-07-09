export interface ImAuditResponse {
    /**
     * 文本审核QPS是否超过限制，取值：true（超过）、false（不超过）。默认文本审核的QPS是5。
     * @example `false`
     */
    TextQuotaExceed: boolean;
    /**
     * 图片审核QPS是否超过限制。取值：true（超过）、false（不超过）。默认图片审核QPS是5。
     * @example `false`
     */
    ImageQuotaExceed: boolean;
    /**
     * 请求ID。
     * @example `5210DBB0-E327-4D45-ADBC-0B83C8793421`
     */
    RequestId: string;
    /**
     * 图片审核返回结果。调用成功是（code=200），返回结果中包含一个或多个元素。参数详情请参见[图文审核接口返回数据](~~268644~~)。
     */
    ImageResults: {
        /**
         * 图片审核结果。
         */
        result: {
            /**
             * 错误码，和HTTP状态码一致。如果执行成功则此参数不返回。
             * @example `200`
             */
            code: number;
            /**
             * 检测对象对应的数据ID。
             * > 如果在检测请求参数中传入了dataId，则此处返回对应的dataId。
             * @example `uuid-1234-1234-1234`
             */
            dataId: string;
            /**
             * 额外附加信息。图文违规（ad）场景中，该参数可能返回以下内容。
             * hitLibInfo：如果图片中的文字命中了自定义文本库，则返回命中的文本库信息。格式为数组，更多结构描述请参见[hitLibInfo](~~268644~~)。
             * @example `{"hitLibInfo":[{"context":"检测视频","libCode":"1234567","libName":"相似文本库a"}]}`
             */
            extras: any;
            /**
             * 请求信息的响应信息。
             * @example `ok`
             */
            msg: string;
            /**
             * 返回结果。调用成功时，返回结果中包含一个或多个元素。每个元素是一个结构体。
             */
            results: {
                /**
                 * 检测结果的分类。不同检测场景的结果分类不同，具体如下：
                 * - 图片智能鉴黄（porn）结果分类：
                 *     - normal：正常。
                 *     - sexy：性感。
                 *     - porn：色情。
                 * - 图片暴恐涉政（terrorism）结果分类：
                 *     - normal：正常。
                 *     - bloody：血腥。
                 *     - explosion：爆炸烟光。
                 *     - outfit：特殊装束。
                 *     - logo：特殊标识。
                 *     - weapon：武器。
                 *     - politics：涉政。
                 *     - violence：打斗。
                 *
                 *     - crowd：聚众。
                 *     - parade：游行。
                 *     - carcrash：车祸现场。
                 *     - flag：旗帜。
                 *     - location：地标。
                 *     - others：其他。
                 * - 图文违规（ad）结果分类：
                 *     - normal：正常。
                 *     - ad：其他广告。
                 *     - politics：文字含涉政内容。
                 *     - porn：文字含涉黄内容。
                 *     - abuse：文字含辱骂内容。
                 *     - terrorism：文字含暴恐内容。
                 *     - contraband：文字含违禁内容。
                 *     - spam：文字含其他垃圾内容。
                 *     - npx：牛皮癣广告。
                 *     - qrcode：含二维码。
                 *     - programCode：含小程序码。
                 * - 图片二维码（qrcode）结果分类：
                 *     - normal：正常。
                 *     - qrcode：含二维码。
                 *     - programCode：含小程序码。
                 * - 图片不良场景（live）结果分类：
                 *     - normal：正常。
                 *     - meaningless：图片中无内容（例如，黑屏、白屏）。
                 *     - PIP：画中画。
                 *     - smoking：吸烟。
                 *     - drivelive：车内直播。
                 * - 图片logo（logo）结果分类：
                 *     - normal：正常。
                 *     - TV：含受管控的logo。
                 *     - trademark：含商标。
                 * @example `sexy`
                 */
                Label: string;
                /**
                 * 置信度分数，取值范围：0（表示置信度最低）~100（表示置信度最高）。如果suggestion为pass，则置信度越高，表示内容正常的可能性越高；如果suggestion为review或block，则置信度越低，表示内容违规的可能性越高。
                 * > 该值仅作为参考，强烈建议您不要在业务中使用。建议您参考suggestion和label（或者部分接口返回的sublabel）结果用于内容违规判定。
                 * @example `91.54`
                 */
                Rate: number;
                /**
                 * 图片检测场景。可取值：
                 * - porn：图片智能鉴黄。
                 * - terrorism：图片暴恐涉政。
                 * - ad：图文违规。
                 * - qrcode：图片二维码。
                 * - live：图片不良场景。
                 * - logo：图片logo。
                 * @example `porn`
                 */
                Scene: string;
                /**
                 * 建议您执行的后续操作。可取值：
                 * - pass：结果正常，无需进行其余操作。
                 * - review：结果不确定，需要进行人工审核。
                 * - block：结果违规，建议直接删除或者限制公开。
                 * @example `block`
                 */
                Suggestion: string;
                /**
                 * 图片中含有广告或文字违规信息时，返回图片中广告文字命中的风险关键词信息。
                 */
                hintWordsInfo: {
                    /**
                     * 文字命中的风险关键词内容。
                     * @example `敏感词`
                     */
                    context: string;
                }[];
                /**
                 * 图片中含有二维码时，返回图片中所有二维码包含的文本信息。
                 */
                qrcodeData: string[];
                /**
                 * 返回图片中识别到的二维码的坐标信息。
                 */
                qrcodeLocations: {
                    /**
                     * 以图片左上角为坐标原点，二维码区域左上角到y轴距离，单位：像素。
                     * @example `11`
                     */
                    x: number;
                    /**
                     * 以图片左上角为坐标原点，二维码区域左上角到x轴距离，单位：像素。
                     * @example `0`
                     */
                    y: number;
                    /**
                     * 二维码区域宽度，单位：像素。
                     * @example `402.0`
                     */
                    w: number;
                    /**
                     * 二维码区域高度，单位：像素。
                     * @example `413.0`
                     */
                    h: number;
                    /**
                     * 识别到的二维码链接。
                     * @example `http://xxx`
                     */
                    qrcode: string;
                }[];
                /**
                 * 图片中含有小程序码时，返回小程序码的位置信息。
                 */
                programCodeData: {
                    /**
                     * 以图片左上角为坐标原点，小程序码区域左上角到y轴距离，单位：像素。
                     * @example `11.0`
                     */
                    x: number;
                    /**
                     * 以图片左上角为坐标原点，小程序码区域左上角到x轴距离，单位：像素。
                     * @example `0.0`
                     */
                    y: number;
                    /**
                     * 小程序码区域宽度，单位：像素。
                     * @example `402.0`
                     */
                    w: number;
                    /**
                     * 小程序码区域高度，单位：像素。
                     * @example `413.0`
                     */
                    h: number;
                }[];
                /**
                 * 图片中含有logo时，返回识别出来的logo信息。
                 */
                logoData: {
                    /**
                     * 识别出的logo类型，取值为TV （台标）。
                     * @example `TV`
                     */
                    type: string;
                    /**
                     * 识别出的logo名称。
                     * @example `湖南台`
                     */
                    name: string;
                    /**
                     * 以图片左上角为坐标原点，logo区域左上角到y轴距离，单位：像素。
                     * @example `140`
                     */
                    x: number;
                    /**
                     * 以图片左上角为坐标原点，logo区域左上角到x轴距离，单位：像素。
                     * @example `68`
                     */
                    y: number;
                    /**
                     * logo区域宽度，单位：像素。
                     * @example `106`
                     */
                    w: number;
                    /**
                     * logo区域高度，单位：像素。
                     * @example `106`
                     */
                    h: number;
                }[];
                /**
                 * 图片中包含暴恐识涉政内容时，返回识别出来的暴恐涉政信息。
                 */
                sfaceData: {
                    /**
                     * 以图片左上角为坐标原点，人脸区域左上角到y轴距离，单位：像素。
                     * @example `49`
                     */
                    x: number;
                    /**
                     * 以图片左上角为坐标原点，人脸区域左上角到y轴距离，单位：像素。
                     * @example `39`
                     */
                    y: number;
                    /**
                     * 人脸区域宽度，单位：像素。
                     * @example `47`
                     */
                    w: number;
                    /**
                     * 人脸区域高度，单位：像素。
                     * @example `121`
                     */
                    h: number;
                    /**
                     * 识别出的人脸信息。
                     */
                    faces: {
                        /**
                         * 字符串类型，相似人物的名称。
                         * @example `命中人名`
                         */
                        name: string;
                        /**
                         * 浮点数类型，置信度分数，取值范围：0（表示置信度最低）~100（表示置信度最高）。置信度越高表示人物识别结果的可信度越高。
                         * @example `91.54`
                         */
                        re: number;
                        /**
                         * 字符串类型，人脸ID。
                         * @example `AliFace_0001234`
                         */
                        idid: string;
                    }[];
                }[];
                /**
                 * ocrData
                 */
                ocrData: string[];
                /**
                 * 如果待检测图片因为过长被截断，该参数返回截断后的每一帧图像的临时访问地址。
                 */
                frames: {
                    /**
                     * 置信度分数，取值范围：0~100，置信度越高表示检测结果的可信度越高。建议您不要在业务中使用该分数。
                     * @example `89.85`
                     */
                    rate: number;
                    /**
                     * 被截断的图片的临时访问URL，地址有效期是5分钟。
                     * @example `http://example.com/test-01.jpg`
                     */
                    url: string;
                }[];
            }[];
            /**
             * 检测任务的ID。
             * @example `img4wlJcb7p4wH4lAP3111111-12****`
             */
            taskId: string;
            /**
             * 检测对象的URL。
             * @example `http://example.com/example-****.jpg`
             */
            url: string;
        }[];
    };
    /**
     * 文本审核返回结果。调用成功是（code=200），返回结果中包含一个或多个元素。参数详情请参见[图文审核接口返回数据](~~268644~~)。
     */
    TextResults: {
        /**
         * 文本审核结果。
         */
        result: {
            /**
             * 错误码，和HTTP状态码一致。更多信息，请参见[错误码表](~~29254~~)。
             * @example `200`
             */
            code: number;
            /**
             * 被检测文本，和调用请求中的待检测文本对应。
             * @example `这是一段测试文本`
             */
            content: string;
            /**
             * 文字的顺序号。
             * @example `cfd33235-71a4-468b-8137-a5ffe323****`
             */
            dataId: string;
            /**
             * 请求消息的响应消息。
             * @example `OK`
             */
            msg: string;
            /**
             * 返回结果。调用成功时（code=200），返回结果中包含一个或多个元素。每个元素是个结构体。
             */
            results: {
                /**
                 * 命中风险信息，一条文本可能命中多条风险详情。
                 */
                details: {
                    /**
                     * 文本命中风险的分类。取值：
                     * - spam：含垃圾信息。
                     * - ad：广告。
                     * - politics：涉政。
                     * - terrorism：暴恐。
                     * - abuse：辱骂。
                     * - porn：色情。
                     * - flood：灌水。
                     * - contraband：违禁。
                     * - meaningless：无意义。
                     * - customized：自定义（例如命中自定义关键词）。
                     * @example `porn`
                     */
                    Label: string;
                    /**
                     * 命中该风险的上下文信息。
                     */
                    contexts: {
                        /**
                         * 检测文本命中的风险关键词，如果命中了关键词会返回该内容，如果命中了算法模型，则不会返回该字段。
                         * @example `上门服务`
                         */
                        context: string;
                        /**
                         * 如果命中关键词，会返回该词在原始文本中的位置。
                         */
                        positions: string[];
                        /**
                         * 命中自定义词库时，才会返回当前字段。取值为创建词库时设置的词库名称。
                         * @example `您自定义的词库名称`
                         */
                        libName: string;
                        /**
                         * 命中您自定义文本库时，才会返回当前字段。取值为创建风险文本库后系统返回的文本库code。
                         * @example `123456`
                         */
                        libCode: string;
                        /**
                         * 命中行为规则时，才会返回当前字段。取值：
                         * - user_id
                         * - ip
                         * - umid
                         * - content
                         * - similar_content
                         * - imei
                         * - imsi
                         * @example `ip`
                         */
                        ruleType: string;
                    }[];
                }[];
                /**
                 * 文本垃圾检测结果的分类。取值：
                 * - normal：正常文本。
                 * - spam：含垃圾信息。
                 * - ad：广告。
                 * - politics：涉政。
                 * - terrorism：暴恐。
                 * - abuse：辱骂。
                 * - porn：色情。
                 * - flood：灌水。
                 * - contraband：违禁。
                 * - meaningless：无意义。
                 * - customized：自定义（例如命中自定义关键词）。
                 * @example `porn`
                 */
                label: string;
                /**
                 * 置信度分数，取值范围：0（表示置信度最低）~100（表示置信度最高）。如果suggestion为pass，则置信度越高，表示内容正常的可能性越高；如果suggestion为review或block，则置信度越低，表示内容违规的可能性越高。
                 * > 该值仅作为参考，强烈建议您不要在业务中使用。建议您参考suggestion和label（或者部分接口返回的sublabel）结果用于内容违规判定。
                 * @example `99.90`
                 */
                rate: number;
                /**
                 * 检测场景。
                 * @example `antispam`
                 */
                scene: string;
                /**
                 * 建议您执行的后续操作。取值：
                 * - pass：文本正常，可以直接放行。
                 * - review：文本需要进一步人工审核。
                 * - block：文本违规，可以直接删除或者限制公开。
                 * @example `block`
                 */
                suggestion: string;
            }[];
            /**
             * 检测任务的ID。
             * @example `txt6HB8NQoEbU@5fosnj2xVEM-1t****`
             */
            taskId: string;
        }[];
    };
}
