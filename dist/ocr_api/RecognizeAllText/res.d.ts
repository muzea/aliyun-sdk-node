export interface RecognizeAllTextResponse {
    /**
     * 请求唯一 ID。
     * @example `E2A98925-DC2C-18FB-995F-BAF507XXXXXX`
     */
    RequestId: string;
    /**
     * 识别结果。
     */
    Data: {
        /**
         * 原图高度。
         * @example `2000`
         */
        Height: number;
        /**
         * 原图宽度。
         * @example `1000`
         */
        Width: number;
        /**
         * 图片包含的所有文字汇总。
         * @example `"合同编号..."`
         */
        Content: string;
        /**
         * 图片包含的子图数量。
         * @example `2`
         */
        SubImageCount: number;
        /**
         * 图片包含的子图信息。
         */
        SubImages: {
            /**
             * 子图ID（编号从**0**开始）。
             * @example `0`
             */
            SubImageId: number;
            /**
             * 子图类型（例如**身份证正面**、**增值税发票**等）。
             * @example `身份证正面`
             */
            Type: string;
            /**
             * 子图顺时针旋转角度（范围：0～359度）。
             * @example `0`
             */
            Angle: number;
            /**
             * 子图四点坐标（当 **OutputCoordinate=“points”** 时返回）。
             */
            SubImagePoints: {
                /**
                 * 顶点横坐标。
                 * @example `100`
                 */
                X: number;
                /**
                 * 顶点纵坐标。
                 * @example `200`
                 */
                Y: number;
            }[];
            /**
             * 子图旋转矩形坐标（当 **OutputCoordinate=“rectangle”** 时返回）。
             */
            SubImageRect: {
                /**
                 * 矩形中心点横坐标。
                 * @example `100`
                 */
                CenterX: number;
                /**
                 * 矩形中心点纵坐标。
                 * @example `200`
                 */
                CenterY: number;
                /**
                 * 子图宽度。
                 * @example `1000`
                 */
                Width: number;
                /**
                 * 子图高度。
                 * @example `2000`
                 */
                Height: number;
            };
            /**
             * * 子图的结构化信息。
             * * 个人卡证、票据等类型图片会返回结构化信息。例如身份证图片，此字段会包含姓名、性别等信息。
             */
            KvInfo: {
                /**
                 * 子图所包含结构化信息的键值对数量。
                 * @example `6`
                 */
                KvCount: number;
                /**
                 * * 结构化信息文字内容。字典类型，**键**为字段名称，**值**为字段对应的识别结果。
                 * * 不同图片类型（**Type**）的结构化字段不同。所有**Type**返回的结构化字段详见**返回结果补充说明**。
                 * @example `{
                  "address": "XX省XX市XX街道XX号",
                  "ethnicity": "汉",
                  "sex": "男",
                  "name": "王XX",
                  "idNumber": "XXX",
                  "birthDate": "2000年1月1日"
                }`
                 */
                Data: any;
                /**
                 * * 结构化信息明细，字典类型。Key为字段名称，Value为此字段对应的识别结果（包含字段值、坐标、置信度等）。
                 */
                KvDetails: any;
            };
            /**
             * * 子图文字块信息。
             * * 当**Type**为**Advanced**、**General**、**MultiLang**、**Commerce**、**HandWriting**  时返回。
             */
            BlockInfo: {
                /**
                 * 子图文字块数量。
                 * @example `12`
                 */
                BlockCount: number;
                /**
                 * 子图文字块信息明细。
                 */
                BlockDetails: {
                    /**
                     * 文字块ID（编号从**0**开始）。
                     * @example `0`
                     */
                    BlockId: number;
                    /**
                     * 文字块顺时针旋转角度（范围：0～359）。
                     * @example `0`
                     */
                    BlockAngle: number;
                    /**
                     * 文字块的文字内容。
                     * @example `“合同编号...”`
                     */
                    BlockContent: string;
                    /**
                     * 文字块置信度（范围：0～100）。
                     * @example `98`
                     */
                    BlockConfidence: number;
                    /**
                     * 文字块四点坐标（当 **OutputCoordinate="points"** 时返回）。
                     */
                    BlockPoints: {
                        /**
                         * 顶点横坐标。
                         * @example `100`
                         */
                        X: number;
                        /**
                         * 顶点纵坐标。
                         * @example `200`
                         */
                        Y: number;
                    }[];
                    /**
                     * 文字块旋转矩形坐标（当 **OutputCoordinate="rectangle"** 时返回）。
                     */
                    BlockRect: {
                        /**
                         * 矩形中心点横坐标。
                         * @example `100`
                         */
                        CenterX: number;
                        /**
                         * 矩形中心点纵坐标。
                         * @example `200`
                         */
                        CenterY: number;
                        /**
                         * 矩形宽度。
                         * @example `50`
                         */
                        Width: number;
                        /**
                         * 矩形高度。
                         * @example `10`
                         */
                        Height: number;
                    };
                    /**
                     * 单字信息（当 **AdvancedConfig.OutputCharInfo=true** 时返回）。
                     */
                    CharInfos: {
                        /**
                         * 单字ID（编号从**0**开始）。
                         * @example `0`
                         */
                        CharId: number;
                        /**
                         * 单字内容。
                         * @example `“合”`
                         */
                        CharContent: string;
                        /**
                         * 单字置信度（范围：0～100）。
                         * @example `95`
                         */
                        CharConfidence: number;
                        /**
                         * 单字四点坐标（当 **OutputCoordinate=“points”** 时返回）。
                         */
                        CharPoints: {
                            /**
                             * 顶点横坐标。
                             * @example `100`
                             */
                            X: number;
                            /**
                             * 顶点纵坐标。
                             * @example `200`
                             */
                            Y: number;
                        }[];
                        /**
                         * 单字旋转矩形坐标（当 **OutputCoordinate=“rectangle”** 时返回）。
                         */
                        CharRect: {
                            /**
                             * 矩形中心点横坐标。
                             * @example `100`
                             */
                            CenterX: number;
                            /**
                             * 矩形中心点纵坐标。
                             * @example `200`
                             */
                            CenterY: number;
                            /**
                             * 矩形宽度。
                             * @example `10`
                             */
                            Width: number;
                            /**
                             * 矩形高度。
                             * @example `10`
                             */
                            Height: number;
                        };
                    }[];
                }[];
            };
            /**
             * 表格信息（当 **AdvancedConfig.OutputTable=true** 时返回）。
             */
            TableInfo: {
                /**
                 * 表格数量。
                 * @example `2`
                 */
                TableCount: number;
                /**
                 * 表格信息明细。
                 */
                TableDetails: {
                    /**
                     * 表格ID（编号从**0**开始）。
                     * @example `0`
                     */
                    TableId: number;
                    /**
                     * 表格行数。
                     * @example `10`
                     */
                    RowCount: number;
                    /**
                     * 表格列数。
                     * @example `3`
                     */
                    ColumnCount: number;
                    /**
                     * 表格单元格数量。
                     * @example `29`
                     */
                    CellCount: number;
                    /**
                     * 表头信息。
                     */
                    Header: {
                        /**
                         * 表头文字内容。
                         */
                        Contents: string[];
                        /**
                         * 文字块ID（编号从0开始）。
                         * @example `0`
                         */
                        BlockId: number;
                    };
                    /**
                     * 表尾信息。
                     */
                    Footer: {
                        /**
                         * 表尾文字内容。
                         */
                        Contents: string[];
                        /**
                         * 文字块ID（编号从**0**开始）。
                         * @example `0`
                         */
                        BlockId: number;
                    };
                    /**
                     * 单元格信息明细。
                     */
                    CellDetails: {
                        /**
                         * 单元格ID（编号从**0**开始）。
                         * @example `0`
                         */
                        CellId: number;
                        /**
                         * 单元格文字内容。
                         * @example `"借款人/抵押人："`
                         */
                        CellContent: string;
                        /**
                         * 单元格起始行数。第一个单元格位置为**0**。
                         * @example `0`
                         */
                        RowStart: number;
                        /**
                         * 单元格终止行数。第一个单元格位置为**0**。**RowStart=0** 且 **RowEnd=0** 表示此单元格只占据了第一行。
                         * @example `0`
                         */
                        RowEnd: number;
                        /**
                         * 单元格起始列数。第一个单元格位置为**0**。
                         * @example `2`
                         */
                        ColumnStart: number;
                        /**
                         * 单元格终止列数。第一个单元格位置为**0**。**ColumnStart=0** 且 **ColumnEnd=0** 表示此单元格只占据了第一列。
                         * @example `5`
                         */
                        ColumnEnd: number;
                        /**
                         * 此单元格所包含的文字块ID。
                         */
                        BlockList: number[];
                        /**
                         * 单元格四点坐标（当 **OutputCoordinate="points"** 时返回）。
                         */
                        CellPoints: {
                            /**
                             * 顶点横坐标。
                             * @example `100`
                             */
                            X: number;
                            /**
                             * 顶点纵坐标。
                             * @example `200`
                             */
                            Y: number;
                        }[];
                        /**
                         * 单元格旋转矩形坐标（当 **OutputCoordinate="rectangle"** 时返回）。
                         */
                        CellRect: {
                            /**
                             * 矩形中心点横坐标。
                             * @example `100`
                             */
                            CenterX: number;
                            /**
                             * 矩形中心点纵坐标。
                             * @example `200`
                             */
                            CenterY: number;
                            /**
                             * 矩形宽度。
                             * @example `20`
                             */
                            Width: number;
                            /**
                             * 矩形高度。
                             * @example `20`
                             */
                            Height: number;
                        };
                        /**
                         * 单元格顺时针旋转角度（范围：0～359）。
                         * @example `0`
                         */
                        CellAngle: number;
                    }[];
                    /**
                     * 表格四点坐标（当 **OutputCoordinate=“points"** 时返回）。
                     */
                    TablePoints: {
                        /**
                         * 顶点横坐标。
                         * @example `100`
                         */
                        X: number;
                        /**
                         * 顶点纵坐标。
                         * @example `200`
                         */
                        Y: number;
                    }[];
                    /**
                     * 表格旋转矩形坐标（当 **OutputCoordinate=“rectangle"** 时返回）。
                     */
                    TableRect: {
                        /**
                         * 矩形中心点横坐标。
                         * @example `100`
                         */
                        CenterX: number;
                        /**
                         * 矩形中心点纵坐标。
                         * @example `200`
                         */
                        CenterY: number;
                        /**
                         * 矩形宽度。
                         * @example `100`
                         */
                        Width: number;
                        /**
                         * 矩形高度。
                         * @example `100`
                         */
                        Height: number;
                    };
                }[];
                /**
                 * * 表格识别结果转成 Excel 后，导出的文件链接。
                 * * 有效期：1小时。
                 * @example `https://example.xlsx`
                 */
                TableExcel: string;
                /**
                 * * 表格识别结果转成 Html 格式后，导出的文件链接。
                 * * 有效期：1小时。
                 * @example `https://example.html`
                 */
                TableHtml: string;
            };
            /**
             * 子图行信息（当 **AdvancedConfig.OutputRow=true** 时返回）。
             */
            RowInfo: {
                /**
                 * 子图包含的行数。
                 * @example `9`
                 */
                RowCount: number;
                /**
                 * 子图行信息明细。
                 */
                RowDetails: {
                    /**
                     * 行ID（编号从**0**开始）。
                     * @example `0`
                     */
                    RowId: number;
                    /**
                     * 行文字内容。
                     * @example `“合同编号..."`
                     */
                    RowContent: string;
                    /**
                     * 此行所包含的文字块ID列表。
                     */
                    BlockList: number[];
                }[];
            };
            /**
             * 子图段落信息（当 **AdvancedConfig.OutputParagraph=true** 时返回）。
             */
            ParagraphInfo: {
                /**
                 * 子图所包含段落数量。
                 * @example `11`
                 */
                ParagraphCount: number;
                /**
                 * 子图段落信息明细。
                 */
                ParagraphDetails: {
                    /**
                     * 段落ID（编号从**0**开始）。
                     * @example `0`
                     */
                    ParagraphId: number;
                    /**
                     * 段落文字内容。
                     * @example `“合同编号...”`
                     */
                    ParagraphContent: string;
                    /**
                     * 此段所包含的文字块ID列表。
                     */
                    BlockList: number[];
                }[];
            };
            /**
             * 子图二维码信息（当 **OutputQrcode=true** 时返回）。
             */
            QrCodeInfo: {
                /**
                 * 子图二维码数量。
                 * @example `1`
                 */
                QrCodeCount: number;
                /**
                 * 子图二维码信息明细。
                 */
                QrCodeDetails: {
                    /**
                     * 二维码内容。
                     * @example `“http://www.gsxt.gov.cn/indeXXX”`
                     */
                    Data: any;
                    /**
                     * 二维码四点坐标（当 **OutputCoordinate=“points”** 时返回）。
                     */
                    QrCodePoints: {
                        /**
                         * 顶点横坐标。
                         * @example `100`
                         */
                        X: number;
                        /**
                         * 顶点纵坐标。
                         * @example `200`
                         */
                        Y: number;
                    }[];
                    /**
                     * 二维码旋转矩形坐标（当 **OutputCoordinate=“rectangle”** 时返回）。
                     */
                    QrCodeRect: {
                        /**
                         * 矩形中心点横坐标。
                         * @example `100`
                         */
                        CenterX: number;
                        /**
                         * 矩形中心点纵坐标。
                         * @example `200`
                         */
                        CenterY: number;
                        /**
                         * 矩形宽度。
                         * @example `100`
                         */
                        Width: number;
                        /**
                         * 矩形高度。
                         * @example `100`
                         */
                        Height: number;
                    };
                    /**
                     * QrCode旋转角度（范围：0～359）。
                     * @example `0`
                     */
                    QrCodeAngle: number;
                }[];
            };
            /**
             * 子图条形码信息（当 **OutputBarCode=true** 时返回）。
             */
            BarCodeInfo: {
                /**
                 * 子图条形码数量。
                 * @example `2`
                 */
                BarCodeCount: number;
                /**
                 * 条形码信息明细。
                 */
                BarCodeDetails: {
                    /**
                     * 条形码类型。支持的类型如下：
                     * * Codabar
                     * * Code39
                     * * Code93
                     * * Code128
                     * @example `Code128`
                     */
                    Type: string;
                    /**
                     * 条形码内容。
                     * @example `"1100011XXXXXX"`
                     */
                    Data: any;
                    /**
                     * 条形码四点坐标（当 **OutputCoordinate=“points”** 时返回）。
                     */
                    BarCodePoints: {
                        /**
                         * 顶点横坐标。
                         * @example `100`
                         */
                        X: number;
                        /**
                         * 顶点纵坐标。
                         * @example `200`
                         */
                        Y: number;
                    }[];
                    /**
                     * 条形码旋转矩形坐标（当 **OutputCoordinate=“rectangle”** 时返回）。
                     */
                    BarCodeRect: {
                        /**
                         * 矩形中心点横坐标。
                         * @example `100`
                         */
                        CenterX: number;
                        /**
                         * 矩形中心点纵坐标。
                         * @example `200`
                         */
                        CenterY: number;
                        /**
                         * 矩形宽度。
                         * @example `100`
                         */
                        Width: number;
                        /**
                         * 矩形高度。
                         * @example `10`
                         */
                        Height: number;
                    };
                    /**
                     * 条形码顺时针旋转角度（范围：0～359）。
                     * @example `0`
                     */
                    BarCodeAngle: number;
                }[];
            };
            /**
             * 子图包含的图案信息（当 **OutputFigure=true** 时返回）。字典类型，键为图案类型，值为此类型图案的信息。支持的图案类型如下：
             * * blicense_title：营业执照标题
             * * national_emblem：国徽
             * * face：人脸
             * * finger_print：指纹
             * * signature：签名区域
             */
            FigureInfo: any;
            /**
             * 子图印章信息（当 **OutputStamp=true** 时返回）。
             */
            StampInfo: {
                /**
                 * 子图印章数量。
                 * @example `2`
                 */
                StampCount: number;
                /**
                 * 印章信息明细。
                 */
                StampDetails: {
                    /**
                     * 子图印章识别结果，字典类型，键为字段名称，值为对应字段的识别结果。
                     */
                    Data: {
                        /**
                         * 进出口企业代码。
                         * @example `"XXX"`
                         */
                        CompanyId: string;
                        /**
                         * 组织名。
                         * @example `"XXX贸易有限公司"`
                         */
                        OrganizationName: string;
                        /**
                         * 防伪编码。
                         * @example `"3205823XXXXXX"`
                         */
                        AntiFakeCode: string;
                        /**
                         * 其它文字。
                         * @example `"3205823XXXXXX"`
                         */
                        OtherText: string;
                        /**
                         * 上环文字。
                         * @example `"XXX贸易有限公司"`
                         */
                        TopText: string;
                        /**
                         * 英文组织名。
                         * @example `""`
                         */
                        OrganizationNameEng: string;
                        /**
                         * 纳税人识别号。
                         * @example `""`
                         */
                        TaxpayerId: string;
                    };
                    /**
                     * 印章四点坐标（当 **OutputCoordinate=“points”** 时返回）。
                     */
                    StampPoints: {
                        /**
                         * 顶点横坐标。
                         * @example `100`
                         */
                        X: number;
                        /**
                         * 顶点纵坐标。
                         * @example `200`
                         */
                        Y: number;
                    }[];
                    /**
                     * 印章旋转矩形坐标（当 **OutputCoordinate=“rectangle”** 时返回）。
                     */
                    StampRect: {
                        /**
                         * 矩形中心点横坐标。
                         * @example `100`
                         */
                        CenterX: number;
                        /**
                         * 矩形中心点纵坐标。
                         * @example `200`
                         */
                        CenterY: number;
                        /**
                         * 矩形宽度。
                         * @example `50`
                         */
                        Width: number;
                        /**
                         * 矩形高度。
                         * @example `50`
                         */
                        Height: number;
                    };
                    /**
                     * 矩形顺时针旋转角度（范围：0～359）。
                     * @example `0`
                     */
                    StampAngle: number;
                }[];
            };
            /**
             * 子图质量检测信息。
             */
            QualityInfo: {
                /**
                 * 是否为复印件
                 * @example `false`
                 */
                IsCopy: boolean;
                /**
                 * 是否是翻拍。仅支持身份证类型图片（**Type=IdCard**）。
                 * @example `false`
                 */
                IsReshoot: boolean;
                /**
                 * 完整度评分。仅支持身份证类型图片（**Type=IdCard**）。
                 * @example `90.5`
                 */
                CompletenessScore: number;
                /**
                 * 整体质量分数。仅支持身份证类型图片（**Type=IdCard**）。
                 * @example `80.5`
                 */
                QualityScore: number;
                /**
                 * 篡改分数。仅支持身份证类型图片（**Type=IdCard**）。
                 * @example `10.5`
                 */
                TamperScore: number;
            };
        }[];
        /**
         * XML格式返回结果。
         * @example `""`
         */
        XmlResult: string;
        /**
         * 算法版本号。
         * @example `""`
         */
        AlgoVersion: string;
        /**
         * Debug信息（不为空时才返回此字段）。
         * @example `""`
         */
        DebugInfo: any;
        /**
         * 算法服务器信息列表（不为空时才返回此字段）。
         */
        AlgoServer: string[];
        /**
         * 是否是混贴类型。
         * @example `false`
         */
        IsMixedMode: boolean;
        /**
         * PDF/OFD页码（从**1**开始）。
         * @example `1`
         */
        PageNo: number;
        /**
         * * 卡证、票据类型图片的结构化信息转成 Excel 格式后，导出的文件链接。
         * * 有效期：1小时。
         * @example `https://example.xlsx`
         */
        KvExcelUrl: string;
    };
    /**
     * 错误码（当识别成功时不会返回）。
     * @example `400`
     */
    Code: string;
    /**
     * 错误信息（当识别成功时不会返回）。
     * @example `illegalImageUrl`
     */
    Message: string;
}
