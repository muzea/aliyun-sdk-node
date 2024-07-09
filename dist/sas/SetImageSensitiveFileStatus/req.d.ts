export interface SetImageSensitiveFileStatusRequest {
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
     * @example `pem`
     */
    "SensitiveFileKey"?: string;
    /**
     * 镜像UUID列表。多项用逗号分隔。
     * @example `f382fccd88b94c5c8c864def6815b854,ac32fccd88b94c5c8c864def6815bo9z`
     */
    "ImageUuids"?: string;
    /**
     * 状态。取值包括：
     * - **0**：未处理。
     * - **1**：忽略。
     * - **2**：误报。
     * @example `0`
     */
    "Status"?: number;
}
