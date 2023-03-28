# System design book
book url: https://bytebyte-go.s3.amazonaws.com/ByteByteGo_LinkedIn_PDF.pdf

## Database isolation level

### English summary
Database Isolation is used to define when each transaction will be excuted to prvent transactions to access to the database at the same time. There are 4 types of isolation levels: read uncommitted, read commited, repeatable read, and serializable

### 日本語解説
データベースの分離レベル（isolation level）とは、複数のトランザクション（処理）が同時にデータベースにアクセスする際に、どの程度の保護を行うかを定義するものです。

一般的に、分離レベルは4つのレベルがあります。

READ UNCOMMITTED（未確定読み取り）：トランザクションがコミットされていないデータにアクセスできます。これは、他のトランザクションが更新中のデータを読み取ることができるため、一貫性が欠ける可能性があるため、使用する場合には注意が必要です。分離レベルが4番目に高い。

READ COMMITTED（確定読み取り）：トランザクションは、コミットされたデータのみにアクセスできます。これは、他のトランザクションが更新中のデータを読み取ることができないため、一貫性が保たれます。分離レベルが3番目に高い。

REPEATABLE READ（繰り返し読み取り）：トランザクションは、最初に読み取ったデータと同じデータにのみアクセスできます。このレベルでは、他のトランザクションによる更新があっても、自分が読み取ったデータは変化しないため、一貫性が保たれます。分離レベルが2番目に高い。

SERIALIZABLE（直列化可能）：トランザクションは、同時に実行されている他のトランザクションによるデータの更新を考慮し、一連のトランザクションを直列化して実行する必要があります。これにより、一貫性が最も高くなりますが、パフォーマンスが低下する可能性があります。分離レベルが1番高い。

分離レベルが高いほど、トランザクションの一貫性が高くなりますが、同時に処理能力も低下する傾向があります。よって、データベースの設計においては、分離レベルを適切に設定することが重要です。

MVCCとは、Multi-Version Concurrency Controlの略で、複数のトランザクションが同時にデータベースにアクセスする際に、衝突を回避するために使用される技術です。MVCCを使用すると、データベース内に複数のバージョンの同じ行が存在することがあります。各トランザクションは、自分が使用するバージョンを選択し、同時に他のトランザクションが使用するバージョンとは異なるバージョンを使用することができます。これにより、衝突を回避し、トランザクションの一貫性を維持することができます。

一方、locksは、トランザクションが実行中に他のトランザクションによる競合を回避するために使用される技術です。ロックは、トランザクションがアクセスするデータに対して設定され、他のトランザクションが同じデータにアクセスできないようにします。ロックは、共有ロックと排他ロックの2種類があります。共有ロックは、他のトランザクションがデータを読み取ることができるが、書き込みはできないようにするもので、排他ロックは、他のトランザクションがデータにアクセスできないようにするものです。ロックを使用することで、トランザクションの一貫性を維持することができますが、ロックが長時間維持される場合、パフォーマンスが低下する可能性があります。

## What is IaaS/PaaS/SaaS?

### English Summary
Cloud comuting has three main service models: IaaS, PaaS, and SaaS

### 日本語解説
クラウドコンピューティングの3つの主要なサービスモデルです。

- IaaS (Infrastructure as a Service)
IaaSは、ハードウェア（サーバー、ストレージ、ネットワークなど）の仮想化されたインフラストラクチャを提供するサービスです。つまり、IaaSプロバイダは、ユーザーに対して仮想マシン（VM）やストレージなどのリソースを提供し、それらを利用してアプリケーションやサービスを実行することができます。
- PaaS (Platform as a Service)
PaaSは、アプリケーションやサービスを開発するためのプラットフォームを提供するサービスです。PaaSプロバイダは、ユーザーに対して開発に必要なプラットフォームやツール（プログラミング言語、フレームワーク、データベース、ウェブサーバーなど）を提供し、それらを利用してアプリケーションを開発することができます。
- SaaS (Software as a Service)
SaaSは、アプリケーションやサービスを提供するための完全なソフトウェアソリューションを提供するサービスです。つまり、SaaSプロバイダは、ユーザーに対して完全なアプリケーション（電子メール、CRM、プロジェクト管理など）を提供し、それを利用して業務を行うことができます。

## What is SSO (Single Sign-On)?

### English Summary
Basically, Single Sign-On (SSO) is an authentication scheme. It allows
a user to log in to different systems using a single ID.

### 日本語解説
SSO（Single Sign-On）は、ユーザーが複数のアプリケーションやシステムに対して同じ認証情報を使って1回のログインでアクセスできるようにする認証技術のことです。ログインプロセスが簡素化され、ユーザーが1つの認証情報を使用するため、パスワードの再利用や脆弱性が減少し、不正アクセスのリスクが低くなります。(例: google, facebook, githubなどのログイン)

## How to store passwords safely in the database?

## English Summary
“a salt is a unique, randomly
generated string that is added to each password as part of the hashing
process. password will be hashed and stored with salt. salt is the good way to store password.
