class QueryBase{

    Usuario(){
        let query =
        `SELECT
            id, login, senha
        FROM usuario  `;

        return query;
    }
    Membro(){
        let query =
        `SELECT
            id, nome, dataNasc,
            sexo, email, dpId,
            usuId, foto_membro
         FROM membro  `;

        return query;
    }
    Departamento(){
        let query =
        `SELECT
            id, nome,
            sala, funcao
        FROM departamento  `;

        return query;
    }

    AllRegister(){
        let query =
        `SELECT
            m.id as mbId, m.nome, m.datanasc
            ,m.sexo, m.email, m.fone
            ,m.dpId as m_dpId, m.usuId as m_usuId, m.foto_membro
            ,u.id as u_Id, u.login, u.senha
            ,dp.id as dp_Id, dp.nome as departamento, dp.funcao, dp.sala
        FROM
            membro as m
            ,departamento as dp
            ,usuario as u
        WHERE
            m.dpId = dp.id
        AND
            m.usuId = u.id`

        return query;
    }
}

module.exports = new QueryBase();