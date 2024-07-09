export interface DescribeImageSensitiveFileByKeyResponse {
    /**
     * 镜像敏感文件信息列表。
     */
    SensitiveFileList: {
        /**
         * 文件路径。
         * @example `/usr/lib/abc.txt`
         */
        FilePath: string;
        /**
         * 镜像层的摘要。
         * @example `0083a31cc0083a31ccf7c10367a6e783e8601e290f7c10367a6e783e860****`
         */
        LayerDigest: string;
        /**
         * 敏感内容。
         * @example `AKPIDteow289f9s************`
         */
        Promt: string;
        /**
         * 建议。
         * @example `Assess risks based on business conditions, remove risky content, and rebuild image`
         */
        Advice: string;
        /**
         * 风险等级。取值：
         * - **high**：高危。
         * - **medium**：中危。
         * - **low**：低危。
         * @example `low`
         */
        RiskLevel: string;
        /**
         * 敏感文件告警类型。取值：
         * - **npm_token**：NPM访问令牌
         * - **ftp_cfg**：FTP配置
         * - **google\_oauth_key**：Google OAuth Key
         * - **planetscale_passwd**：Planetscale密码
         * - **github\_ssh_key**：Github SSH密钥
         * - **msbuild\_publish_profile**：MSBuild publish profile
         * - **fastly\_cdn_token**：Fastly CDN的令牌
         * - **ssh\_private_key**：SSH私钥
         * - **aws_cli**：AWS CLI凭证
         * - **cpanel_proftpd**：cPanel ProFTPd凭证
         * - **postgresql_passwd**：PostgreSQL密码文件
         * - **discord\_client_cred**：Discord客户端凭证
         * - **rails_database**：Rails数据库配置
         * - **aws\_access_key**：AWS Access Key
         * - **esmtp_cfg**：ESMTP邮件服务器配置
         * - **docker\_registry_cfg**：Docker镜像仓库配置
         * - **pem**：PEM
         * - **common_cred**：通用凭证
         * - **sftp_cfg**：SFTP连接配置
         * - **grafana_token**：Grafana令牌
         * - **slack_token**：Slack Token
         * - **ec\_private_key**：EC私钥
         * - **pypi_token**：PyPI上传Token
         * - **finicity_token**：Finicity平台令牌
         * - **k8s\_client_key**：Kubernetes客户端私钥
         * - **git_cfg**：Git配置
         * - **django_key**：Django密钥
         * - **jenkins_ssh**：Jenkins SSH配置文件
         * - **openssh\_private_key**：OPENSSH私钥
         * - **square_oauth**：Square OAuth凭证
         * - **typeform_token**：Typeform 令牌
         * - **common\_database_cfg**：通用数据库连接配置
         * - **wordpress\_database_cfg**：WordPress数据库配置
         * - **googlecloud\_api_key**：Google Cloud API Key
         * - **vscode_sftp**：VSCode SFTP配置
         * - **apache_htpasswd**：Apache htpasswd
         * - **planetscale_token**：Planetscale令牌
         * - **contentful\_preview_token**：Contentful Preview令牌
         * - **php\_database_cfg**：PHP应用程序数据库密码
         * - **atom\_remote_sync**：Atom远程同步配置
         * - **aws\_session_token**：AWS会话令牌
         * - **atom\_sftp_cfg**：Atom SFTP配置
         * - **asana\_client\_private_key**：Asana项目管理平台客户端密钥
         * - **tencentcloud_ak**：他云SecretId
         * - **rsa\_private_key**：RSA私钥
         * - **github\_personal_token**：Github Personal访问令牌
         * - **pgp**：PGP加密文件
         * - **stripe_skpk**：Stripe Secret Key
         * - **square_token**：Square访问令牌
         * - **rails_carrierwave**：Rails Carrierwave文件上传凭证
         * - **dbeaver\_database_cfg**：DBeaver数据库配置
         * - **robomongo_cred**：Robomongo凭证
         * - **github\_oauth_token**：Github OAuth访问令牌
         * - **pulumi_token**：Pulumi令牌
         * - **ventrilo_voip**：Ventrilo VoIP Server配置
         * - **macos\_keychain**：macOS钥匙串
         * - **amazon\_mws_token**：Amazon MWS Token
         * - **dynatrace_token**：Dynatrace令牌
         * - **java_keystore**：Java密钥库
         * - **microsoft_sdf**：Microsoft SQL CE数据库
         * - **kubernetes\_dashboard_cred**：Kubernetes Dashboard用户凭证
         * - **atlassian_token**：Atlassian 令牌
         * - **rdp**：远程桌面连接RDP
         * - **mailgun_key**：Mailgun Webhook Signing Key
         * - **mailchimp\_api_key**：Mailchimp API Key
         * - **netrc_cfg**：.netrc配置文件
         * - **openvpn_cfg**：OpenVPN客户端配置
         * - **github\_refresh_token**：Github Refresh Token
         * - **salesforce**：Salesforce凭证
         * - **sendinblue**：Sendinblue令牌
         * - **pkcs\_private_key**：PKCS＃12密钥
         * - **rubyonrails_passwd**：Ruby on Rails密码文件
         * - **filezilla_ftp**：FileZilla FTP配置
         * - **databricks_token**：Databricks令牌
         * - **gitLab\_personal_token**：GitLab Personal访问令牌
         * - **rails\_master_key**：Rails Master Key
         * - **sqlite**：SQLite3/SQLite数据库
         * - **firefox_logins**：Firefox登录配置
         * - **mailgun\_private_token**：Mailgun Private令牌
         * - **joomla_cfg**：Joomla 配置
         * - **hashicorp\_terraform_token**：Hashicorp Terraform Token
         * - **jetbrains_ides**：Jetbrains IDEs配置
         * - **heroku\_api_key**：Heroku API key
         * - **messagebird_token**：MessageBird令牌
         * - **github\_app_token**：Github App Token
         * - **hashicorp\_vault_token**：Hashicorp Vault Token
         * - **pgp\_private_key**：PGP私钥
         * - **sshpasswd**：SSH密码
         * - **huaweicloud_ak**：他云Secret Access Key
         * - **aws_s3cmd**：AWS S3cmd配置
         * - **php_config**：Php配置
         * - **common\_private_key**：常见私钥类型
         * - **microsoft_mdf**：Microsoft SQL数据库
         * - **mediawiki_cfg**：MediaWiki配置
         * - **jenkins_cred**：Jenkins凭证
         * - **rubygems_cred**：Rubygems凭证
         * - **clojars_token**：Clojars 令牌
         * - **phoenix\_web_passwd**：Phoenix Web凭证
         * - **puttygen\_private_key**：PuTTYgen私钥
         * - **google\_oauth_token**：Google OAuth访问令牌
         * - **rubyonrails_cfg**：Ruby On Rails数据库配置
         * - **lob\_api_key**：Lob API Key
         * - **pkcs_cred**：PKCS＃12证书
         * - **otr\_private_key**：OTR私钥
         * - **contentful\_delivery_token**：Contentful Delivery令牌
         * - **digital\_ocean_tugboat**：Digital Ocean Tugboat配置
         * - **dsa\_private_key**：DSA私钥
         * - **rails\_app_token**：Rails App令牌
         * - **git_cred**：Git用户凭证
         * - **newrelic\_api_key**：New Relic User API Key
         * - **github_hub**：存储Github令牌的hub配置
         * - **rubygem**：Rubygem令牌
         * @example `google_oauth_key`
         */
        SensitiveFileKey: string;
        /**
         * 敏感文件告警类型名。
         * @example `Google OAuth Key`
         */
        SensitiveFileName: string;
        /**
         * 首次扫描的时间戳，单位：毫秒。
         * @example `1663321552000`
         */
        FirstScanTime: number;
        /**
         * 最新扫描的时间戳，单位：毫秒。
         * @example `1663691592000`
         */
        LastScanTime: number;
        /**
         * 敏感文件描述。
         * @example `Verify the validity of the leaked AK.`
         */
        Description: string;
        /**
         * 敏感文件MD5值。
         * @example `b484b0dff093f358897486b58266****`
         */
        Md5: string;
    }[];
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询结果的总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 当前页显示数据条数。
         * @example `2`
         */
        Count: number;
        /**
         * 最后一条数据的键。
         * @example `CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAGYXFWIAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM1Mzc3Njc4MzA2ODY5NmI2YTY1Nzg2NTcxNjE2NDc4NjE=`
         */
        LastRowKey: string;
    };
    /**
     * 返回的查询结果的状态。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 服务状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CE500770-42D3-442E-9DDD-156E0F9F3B45`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
