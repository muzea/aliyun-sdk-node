export interface DescribeProductResponse {
    /**
     * 商品类目 ID
     * @example `523617212`
     */
    FrontCategoryId: number;
    /**
     * 已废弃
     * @example `1`
     */
    Status: string;
    /**
     * 商品类型。取值：
     * * APP：应用类
     * * DOWNLOAD： 下载类
     * * MIRROR： 镜像类
     * * SERVICE： 服务类
     * * API_SERVICE： api类
     * @example `MIRROR`
     */
    Type: string;
    /**
     * 商品图片 URL
     * @example `https://oss.aliyuncs.com/photogallery/photo/1930532890589852/6245/495d5f19-03e4-4c2e-9c4e-bef9ab6af1e1.png`
     */
    PicUrl: string;
    /**
     * 商品评分
     * @example `5.0`
     */
    Score: number;
    /**
     * 使用计数
     * @example `10`
     */
    UseCount: number;
    /**
     * 更改时间
     * @example `1578931200000`
     */
    GmtModified: number;
    /**
     * 服务商 UID
     * @example `1526111111****`
     */
    SupplierPk: number;
    /**
     * 创建时间
     * @example `1578931200000`
     */
    GmtCreated: number;
    /**
     * 请求 ID
     * @example `6EF60BEC-0242-43AF-BB20-270359FB54A7`
     */
    RequestId: string;
    /**
     * 商品简介
     * @example `该镜像为LNMP（Ubuntu16.04 64位+Nginx+MySQL5.6+PHP5.3）`
     */
    ShortDescription: string;
    /**
     * 商品详情描述，支持 HTML。
     * @example `<div>基于阿里云（Ubuntu16.04 64位）系统源码安装，安全、稳定、高效！</div>`
     */
    Description: string;
    /**
     * 商品对应商品码
     * @example `cmjj01**45`
     */
    Code: string;
    /**
     * 审核失败原因，QueryDraft = true 时返回。
     * @example `功能验收不通过`
     */
    AuditFailMsg: string;
    /**
     * 商品名称
     * @example `LNMP环境（Ubuntu16.04 Nginx PHP5.3）`
     */
    Name: string;
    /**
     * 审核时间，QueryDraft = true 时返回。
     * @example `1581609600000`
     */
    AuditTime: number;
    /**
     * 审核状态，QueryDraft = true 时返回。
     * - draft：未提交
     * - security_ing：安全审核中
     * - security_fail：安全审核失败
     * - function_ing：功能审核中
     * - function_fail：功能审核失败
     * - info_ing：商品信息审核中
     * - info_fail：商品信息审核失败
     * - success：成功
     * @example `function_fail`
     */
    AuditStatus: string;
    /**
     * 店铺信息
     */
    ShopInfo: {
        /**
         * 店铺名称
         * @example `**科学公司`
         */
        Name: string;
        /**
         * 邮箱
         * @example `46**41@example.com`
         */
        Emails: string;
        /**
         * 店铺 ID
         * @example `123`
         */
        Id: number;
        WangWangs: {
            /**
             * 旺旺
             */
            WangWang: {
                /**
                 * 备注
                 * @example `123`
                 */
                Remark: string;
                /**
                 * 旺旺用户名
                 * @example `ABC`
                 */
                UserName: string;
            }[];
        };
        Telephones: {
            Telephone: string[];
        };
    };
    ProductSkus: {
        /**
         * 商品规格信息
         */
        ProductSku: {
            /**
             * 是否隐藏
             * @example `true`
             */
            Hidden: boolean;
            /**
             * 规格码
             * @example `cmjj01****-Package`
             */
            Code: string;
            /**
             * 规格模块约束，支持 JSON 格式。
             * @example `{\"img_id\":{\"img_version|img_region\":{\"V1.7|cn-shenzhen-st3-a01\":[\"m-wz9ho4hmos0lpxcldqoq\"]}}`
             */
            Constraints: string;
            /**
             * 规格名称
             * @example `21`
             */
            Name: string;
            /**
             * 付费方式：
             * * POSTPAY：后付费
             * * PREPAY：预付费
             * @example `PREPAY`
             */
            ChargeType: string;
            OrderPeriods: {
                /**
                 * 可订购周期
                 */
                OrderPeriod: {
                    /**
                     * 订购周期名称
                     * @example `小时`
                     */
                    Name: string;
                    /**
                     * 预付费时间单位
                     * @example `HOUR`
                     */
                    PeriodType: string;
                }[];
            };
            Modules: {
                /**
                 * 规格模块信息
                 */
                Module: {
                    /**
                     * 规格模块 Code
                     * @example `img_id`
                     */
                    Code: string;
                    /**
                     * 模块名称
                     * @example `镜像ID`
                     */
                    Name: string;
                    /**
                     * 模块 ID
                     * @example `248220`
                     */
                    Id: string;
                    Properties: {
                        /**
                         * 模块可选值
                         */
                        Property: {
                            /**
                             * 英文名称
                             * @example `img_id`
                             */
                            Key: string;
                            /**
                             * 展示样式类型。取值：
                             * - number： 数字
                             * - string:  字符串
                             * - radio：单选
                             * @example `number`
                             */
                            ShowType: string;
                            /**
                             * 中文名称
                             * @example `镜像ID`
                             */
                            Name: string;
                            /**
                             * 显示单位
                             * @example `1`
                             */
                            DisplayUnit: string;
                            PropertyValues: {
                                /**
                                 * 属性值
                                 */
                                PropertyValue: {
                                    /**
                                     * 展示名称
                                     * @example `华北 1_V1.1`
                                     */
                                    DisplayName: string;
                                    /**
                                     * 属性值类型
                                     * @example `single_string`
                                     */
                                    Type: string;
                                    /**
                                     * 步进
                                     * @example `1`
                                     */
                                    Step: string;
                                    /**
                                     * 属性值
                                     * @example `m-28e213e7t`
                                     */
                                    Value: string;
                                    /**
                                     * 最大
                                     * @example `123`
                                     */
                                    Max: string;
                                    /**
                                     * 备注
                                     * @example `abc`
                                     */
                                    Remark: string;
                                    /**
                                     * 最小
                                     * @example `11`
                                     */
                                    Min: string;
                                }[];
                            };
                        }[];
                    };
                }[];
            };
        }[];
    };
    ProductExtras: {
        /**
         * 商品附加信息：
         * * 产品亮点 product_advantage
         * * 产品截图 product_shot
         * * 使用指南 product_guide
         * * 售后支持范围 product_support
         * * 产品资质 product_aptitude
         * * 产品说明 product_direction
         * * 客户案例 product_case
         */
        ProductExtra: {
            /**
             * 扩展项类型：
             * * HTML
             * * LIST
             * * JSON
             * * SLIDER
             * * LINK
             * * IMG
             * @example `HTML`
             */
            Type: string;
            /**
             * 扩展项英文标识
             * @example `product_advantage`
             */
            Key: string;
            /**
             * 扩展项中文标识
             * @example `产品亮点`
             */
            Label: string;
            /**
             * 排序
             * @example `0`
             */
            Order: number;
            /**
             * 扩展项数据值
             * @example `\"1. 基于阿里云（Ubuntu16.04 64位）系统源码安装，安全、稳定、高效！\"`
             */
            Values: string;
        }[];
    };
}
