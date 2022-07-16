FROM ruby:3.0.2

ARG WORKDIR
WORKDIR $WORKDIR

ARG HOST
ARG PORT

RUN apt-get update && apt-get install -y \
    nodejs \
    postgresql-client \
    yarn \
    npm \
    less \
    vim \
    curl \
    sudo

RUN apt-get install -y nodejs npm && npm install n -g && n 18.4.0

COPY . .
RUN bundle install

# env ------------------------------------
ARG DB_HOST_NAME
ENV DB_HOST_NAME $DB_HOST_NAME

ARG DB_DATABASE_NAME
ENV DB_DATABASE_NAME $DB_DATABASE_NAME

ARG DB_USER_NAME
ENV DB_USER_NAME $DB_USER_NAME

ARG DB_PASSWORD
ENV DB_PASSWORD $DB_PASSWORD
# ----------------------------------------

EXPOSE $PORT
CMD ["rails" "server" "-b" "${HOST}"]
