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

### English Summary
“a salt is a unique, randomly
generated string that is added to each password as part of the hashing
process. password will be hashed and stored with salt. salt is the good way to store password.

##　How does HTTPS work?

### English Summary
- The client (browser) and the server establish a TCP
connection.
- The client sends the request to the server with cipher suites and TLS. The server will send response, and send SSL certificate(contians public key, host name, expiry dates), and clients validates the certificate.
- The client generates a session key and encrypts it using the public key. The server receives the encrypted session key and decrypts it with the private key.
- Both the client and the server hold the same session key (symmetric encryption), the encrypted data is transmitted in a secure bi-directional channel.

### 日本語解説
Hypertext Transfer Protocol Secure（HTTPS）は、Hypertext Transfer Protocol（HTTP）の拡張機能です。HTTPSは、Transport Layer Security（TLS）を使用して暗号化されたデータを送信します。オンライン上でデータがハイジャックされた場合、ハイジャッカーが受け取るのはバイナリコードだけです。つまり、HTTPSを使用することで、データが安全に転送され、第三者による盗聴や改ざんが防止されます。

## How does Twitter work?

### English summary

#### The life of a Tweet
- A tweet comes in through the Write API.
- The Write API routes the request to the Fanout service. (Fanout: transaction to send information to the multiple nodes. For example, when you tweet something, it will be send to all followers)
- The Fanout service does a lot of processing and stores them in the
Redis cache. (Redis: open source memory database)
- The Timeline service is used to find the Redis server that has the
home timeline on it.
- A user pulls their home timeline through the Timeline service.
#### Search & Discovery
- Ingester annotates and tokenizes Tweets so the data can be indexed. (Ingester: will collect data from multiple sources.)
- Earlybird will store search index. (Earlybird: A distributed processing framework for processing large amounts of data in real time that Twitter developed.)
- Blender creates the search and discovery timelines. (Blender: "Blender" is a distributed processing framework developed by Twitter for acquiring and integrating data from multiple data sources.)
#### Push Compute
- HTTP push/Mobile push: show the notification updates.

### 日本語解説
- Fanout
ある情報を複数のノードに配信する処理を指します。一般的には、メッセージキューの機能を利用して、あるメッセージを送信したノードから別のノードに対してメッセージを配信することが多いです。例えば、Twitterのタイムラインにツイートを配信する際に、フォロワーの全員に通知する処理が「Fanout」と呼ばれることがあります。
- Ingester
複数のソースからデータを収集し、処理可能な形に変換する処理を指します。データを処理する際に必要な前処理（例えば、データの正規化やフィルタリングなど）を行うことが多いです。例えば、ニュースサイトで複数のニュース配信元から情報を収集し、それを一元化して処理する処理が「Ingester」と呼ばれることがあります。
- Redis
オープンソースのインメモリデータベースです。高速な処理が可能であり、キャッシュやセッション管理などの用途でよく利用されます。また、データ構造をサポートしているため、キューやリスト、セットなどのデータを効率的に処理することができます。
- Earlybird
Twitterが開発した、リアルタイムで大量のデータを処理するための分散処理フレームワークです。ストリーミングデータの処理に特化しており、高いスループットを実現することができます。
- Blender
「Blender」とは、Twitterが開発した、複数のデータソースからデータを取得し、統合するための分散処理フレームワークです。複数のデータソースからデータを収集し、それを統合することで、より豊富な情報を提供することができます。

## What is the difference between Process and Thread?

### English summary
Program is a collection of codes that will be excuted on the computer. Process is a executable unit. For example, word, excel, chrome, memo app can be each process, and can be excuted at the same time(this will be called as multi process). Each process will not share same memory, so processes will not interfere with each other. Thread is a synchronizing excutable unit in the process. Single thread process means the process that holds only one thread. Multi thread process means the process that holds multiple threads. Multi thread will simplify the synchronizing transaction.

- A Program is an executable file containing a set of
instructions and passively stored on disk. One program can have
multiple processes. For example, the Chrome browser creates a
different process for every single tab.
- A Process means a program is in execution. When a program is loaded
into the memory and becomes active, the program becomes a
process. The process requires some essential resources such as
registers, program counter, and stack.
- A Thread is the smallest unit of execution within a process.

## Interview Question: design Google Docs

### English Summary
Google docs uses OT for real-time conflict resolution.

OT: OT is an algorithm used in distributed systems to avoid conflicts and synchronize editing when multiple users are editing a shared document simultaneously.

### 日本語解説

OT、DS、CRDTは、分散システムや共有編集などの分野で使用される技術/アルゴリズムです。以下にそれぞれの技術/アルゴリズムについて説明します。

OT (Operational Transformation)
OTは、分散システムにおいて複数のユーザーが同時に共有編集を行う場合に、競合を回避し、編集内容を一致させるために使用されるアルゴリズムです。編集操作を分解し、その操作を反映する前後の文書の状態を比較して、差分を計算して同期を取ることで、編集の競合を回避します。OTは、Google DocsやEtherpadなどの共同編集ツールで使用されています。

DS (Distributed Systems)
DSは、複数の独立したコンピューターがネットワークを介して相互に通信し、協調して動作するシステムのことです。DSは、複数のノードがネットワークを介して相互に通信し、共有リソースを管理することで、高可用性やスケーラビリティなどの利点を持ちます。DSは、インターネットや分散データベース、P2Pネットワーク、クラウドコンピューティングなど、多くの分野で使用されています。

CRDT (Conflict-free Replicated Data Type)
CRDTは、複数のノードが同じデータを編集する場合に、競合を回避し、編集内容を一致させるために使用されるデータ構造のことです。CRDTは、同期された複数のコピーがあっても、競合を回避し、編集内容を一致させることができます。CRDTは、GoogleのグローバルドキュメントストレージシステムSpannerや、RiakやCassandraといった分散データベースで使用されています。
